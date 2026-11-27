import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile, mkdtemp, writeFile, mkdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { unzipSync } from 'fflate';
import { base } from '../../course.config.mjs';
import lecture from '../../lecture-01.config.mjs';

for (const lang of ['en', 'ru']) {
  const ru = lang === 'ru';
  test(`${lang}: learner can expose the boundary, open the lesson and switch language`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${lang}/`);
    await expect(page.locator('html')).toHaveAttribute('lang', lang);
    const demo = page.locator('seat-explorer');
    await demo.locator('[data-count="10"]').click();
    await demo.locator('select').selectOption('false');
    await demo.getByRole('button', { name: ru ? 'Проверить' : 'Check the result', exact: true }).click();
    await expect(demo.getByRole('status')).toContainText(ru ? 'Расхождение!' : 'A mismatch!');
    await expect(demo.getByRole('status')).toContainText(ru ? 'Ваш прогноз верен' : 'Your prediction is correct');
    for (const count of ['9', '11']) {
      await demo.locator(`[data-count="${count}"]`).click();
      await demo.getByRole('button', { name: ru ? 'Проверить' : 'Check the result', exact: true }).click();
      await expect(demo.getByRole('status')).toContainText(ru ? 'Совпадает.' : 'They agree.');
    }
    await page.getByRole('link', { name: ru ? 'Начать урок' : 'Start the lesson' }).click();
    await expect(page).toHaveURL(new RegExp(`/${lang}/lessons/foundations/`));
    const other = ru ? 'en' : 'ru';
    await page.getByRole('banner').locator('starlight-lang-select select').selectOption({ label: ru ? 'English' : 'Русский' });
    await expect(page).toHaveURL(new RegExp(`/${other}/lessons/foundations/`));
    await expect(page.locator('html')).toHaveAttribute('lang', other);
    expect(errors).toEqual([]);
  });

  test(`${lang}: mobile lesson, keyboard controls, and reduced motion remain usable`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' });
    await page.goto(`${lang}/lessons/foundations/`);
    const input = page.locator('seat-explorer input');
    await input.fill('10');
    await input.press('Enter');
    await expect(page.locator('seat-explorer [role="status"]')).toContainText(ru ? 'Расхождение!' : 'A mismatch!');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(await page.locator('.seat').first().evaluate(el => parseFloat(getComputedStyle(el).transitionDuration))).toBeLessThan(.01);
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(result.violations).toEqual([]);
    await page.goto(`${lang}/`);
    await page.getByRole('link', { name: ru ? 'English' : 'Русский', exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/${ru ? 'en' : 'ru'}/$`));
  });

  test(`${lang}: full lecture retains the main assignment and links its sources`, async ({ page }) => {
    await page.goto(`${lang}/lessons/foundations/`);
    await expect(page.getByRole('heading', { name: ru ? 'Домашнее задание: 20 кейсов для приложения' : 'Homework: 20 cases for one application', exact: true })).toBeVisible();
    await page.goto(`${lang}/lessons/foundations-sources/`);
    await expect(page.locator('main a[href*="t=8494s"]')).toBeVisible();
    await page.getByRole('banner').locator('starlight-lang-select select').selectOption({ label: ru ? 'English' : 'Русский' });
    await expect(page).toHaveURL(new RegExp(`/${ru ? 'en' : 'ru'}/lessons/foundations-sources/`));
  });

  test(`${lang}: search finds the current language's lesson`, async ({ page }) => {
    await page.goto(`${lang}/`);
    await page.getByRole('button', { name: ru ? 'Поиск' : 'Search', exact: true }).click();
    const search = page.getByRole('textbox', { name: ru ? 'Поиск' : 'Search', exact: true });
    await search.fill(ru ? 'оракул' : 'oracle');
    const results = page.locator('.pagefind-ui__result-link');
    await expect(results.first()).toBeVisible();
    const links = await results.evaluateAll(nodes => nodes.map(node => node.getAttribute('href')));
    expect(links.every(link => link.includes(`/${lang}/`))).toBe(true);
    expect(links.some(link => link.includes('/lessons/foundations/'))).toBe(true);
  });

  test(`${lang}: slides reveal states, preserve slide on language switch, and reload deeply`, async ({ page }) => {
    await page.goto(`slides/${lang}/foundations/#/${lecture.boundarySlide}`);
    await expect(page.locator('.diagram-caption strong')).toContainText('9');
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('.diagram-caption strong')).toContainText('10');
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('.diagram-caption strong')).toContainText('11');
    await page.locator('.course-slide-footer').getByRole('link', { name: ru ? 'English' : 'Русский' }).click();
    await expect(page).toHaveURL(new RegExp(`/slides/${ru ? 'en' : 'ru'}/foundations/#/${lecture.boundarySlide}`));
    await page.reload();
    await expect(page.locator('.capacity-diagram')).toBeVisible();
    await page.locator('.course-slide-footer').getByRole('link', { name: ru ? 'Lesson reading' : 'Текст урока' }).click();
    await expect(page).toHaveURL(new RegExp(`/${ru ? 'en' : 'ru'}/lessons/foundations/`));
  });

  test(`${lang}: every slide has a rendered heading and fits above the footer`, async ({ page }) => {
    test.setTimeout(120000);
    for (let slide = 1; slide <= lecture.slideIds.length; slide++) {
      await page.goto(`slides/${lang}/foundations/#/${slide}?clicks=99`);
      const active = page.locator(`[data-slidev-no="${slide}"].slidev-page-active .slidev-layout`);
      await expect(active.locator('h1')).toBeVisible();
      // Wait for fonts before measuring projected slide dimensions.
      await page.evaluate(() => document.fonts.ready);
      const overflow = await active.evaluate(el => {
        const bottom = document.querySelector('.course-slide-footer').getBoundingClientRect().top;
        const right = el.getBoundingClientRect().right;
        return Array.from(el.children).filter(child => {
          const rect = child.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0 && (rect.bottom > bottom - 4 || rect.right > right - 8);
        }).map(child => child.textContent.slice(0, 80));
      });
      expect(overflow, `Slide ${lang}/${slide} overflows`).toEqual([]);
    }
  });
}

test('light and dark home pages have no automated accessibility violations', async ({ page }) => {
  for (const theme of ['light', 'dark']) {
    await page.emulateMedia({ colorScheme: theme });
    await page.goto('en/');
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(result.violations).toEqual([]);
  }
});

test('downloaded lab works without dependencies and supports the complete failure/fix loop', async ({ request }) => {
  const response = await request.get(`${base}downloads/registration-lab.zip`);
  expect(response.ok()).toBe(true);
  const entries = unzipSync(new Uint8Array(await response.body()));
  expect(Object.keys(entries).some(file => file.includes('/solution/'))).toBe(false);
  const temporary = await mkdtemp(join(tmpdir(), 'testing-course-lab-'));
  try {
    for (const [file, data] of Object.entries(entries)) {
      const target = join(temporary, file);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, data);
    }
    const cwd = join(temporary, 'registration-lab');
    const run = args => spawnSync(process.execPath, args, { cwd, encoding: 'utf8' });
    expect(run(['--test', 'starter/registration.test.mjs']).status).toBe(0);
    const before = run(['check.mjs']);
    expect(before.status).toBe(1);
    expect(before.stdout).toContain('4/6 checks passed');
    const testFile = join(cwd, 'starter/registration.test.mjs');
    await writeFile(testFile, await readFile(testFile, 'utf8') + "\ntest('full event rejects registration', () => assert.equal(isRegistrationOpen(10, 10), false));\n");
    expect(run(['--test', 'starter/registration.test.mjs']).status).toBe(1);
    const implementation = join(cwd, 'starter/registration.mjs');
    await writeFile(implementation, (await readFile(implementation, 'utf8')).replace('registered <= capacity', 'registered < capacity'));
    expect(run(['--test', 'starter/registration.test.mjs']).status).toBe(0);
    const after = run(['check.mjs']);
    expect(after.status).toBe(0);
    expect(after.stdout).toContain('6/6 checks passed');
  } finally { await rm(temporary, { recursive: true, force: true }); }
});
