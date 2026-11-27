# Testing, in practice / Тестирование на практике

A bilingual software-testing course for university students with basic programming
and junior QA engineers moving into automation.

**Pilot:** one complete lesson in English and Russian, 20 animated slides per language,
an interactive boundary example, and a 35-minute practical lab. Later course modules
are explicitly marked as planned. Original lecture PDFs, videos, and application
examples remain in their existing directories.

[Русская инструкция](README.ru.md) · [2021 archive](lectures_v_2021/README.MD) · [2020 archive](lectures_v_2020/README.md)

## Preview the complete course

Use Node.js 24 (`nvm use` if you use nvm).

```sh
npm ci
npm run build
npm run preview
```

Open <http://127.0.0.1:4321/testing-lectures/en/> or
<http://127.0.0.1:4321/testing-lectures/ru/>. The complete preview includes search,
slides, and the downloadable lab. Search indexes are generated at build time.

For authoring with hot reload:

```sh
npm run dev
# In a second terminal, for slide editing:
npm run slides:en
# Or in another terminal:
npm run slides:ru
```

The website uses port 4321, English slides 3030, and Russian slides 3031. Website links
to slides/downloads require the complete built preview; slide editing servers have
their own URLs. Run both slide servers for language switching during slide editing.

## Try the lab without installing the website

From `labs/registration`, run:

```sh
node --test starter/registration.test.mjs
```

The two starter tests pass. Add an equality test, observe its failure, change the
comparison, and run `node check.mjs`. The untouched starter intentionally fails two
contract cases. [Lab instructions](labs/registration/README.md) and
[Russian instructions](labs/registration/README.ru.md) explain the task and rubric.

`npm test` verifies the published teaching fixtures, including the deliberate defect.
It is a maintainer check, not the learner's command after fixing their copy.

## Repository layout

```text
website/                     Astro + Starlight website
  src/content/docs/en/       English lessons, labs, glossary, course map
  src/content/docs/ru/       Russian counterparts with identical filenames
  src/components/           Shared interactive example and course layout
slides/                      Editable Slidev Markdown, Vue diagrams, shared styles
labs/registration/           Dependency-free Node test exercise and reference solution
instructor/                  Bilingual facilitation notes and acceptance checklist
scripts/                     Build, link/parity checks, and static preview server
tests/                       Teaching-fixture and browser tests
dist/                        Generated course, slides, search, and lab ZIP (ignored)
lectures_v_2020/              Original archive
lectures_v_2021/              Original archive
```

## Check a change

```sh
npm test
npm run lab:test
npm run lab:solution
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite covers the EN/RU learner journey, same-topic language switching,
slide reveals and deep-link reload, mobile layout, reduced motion, search language,
automated accessibility checks, and the downloaded lab's complete failure/fix loop.
The build checks locale/slide parity and local links/assets. Automated accessibility
checks supplement manual keyboard and visual review.

For a Lighthouse check, start the preview and run:

```sh
npx lighthouse http://127.0.0.1:4321/testing-lectures/en/ --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=./lighthouse.html
```

The `image-size` override pins a patched transitive dependency of Slidev's optional
PowerPoint exporter (GHSA-5p2g-fcmc-qvqq and GHSA-w3rx-r6r6-pgpr). This course uses
static web slides; PowerPoint export is not part of the supported workflow. Revisit
the override when upstream `pptxgenjs` updates its dependency.

## Translation and slide authoring

Keep EN/RU filenames and slide `name` IDs aligned. Update both languages in the same
change; do not publish silent fallback translations. Keep executable examples shared
and translate the explanation. The [glossary](website/src/content/docs/en/glossary.md)
defines the vocabulary. `npm run check:content` enforces page and slide parity.

The slide decks use click-controlled reveals, not timed autoplay. System reduced
motion disables transitions while retaining the teaching sequence. The full lesson
is the static equivalent and can be printed from the browser. Speaker notes are in
each Markdown deck; do not put private answers or student data in notes, since the
built deck includes them.

## Publishing

`course.yml` builds and tests the pilot on pull requests and saves a reviewable
`bilingual-course` artifact. It publishes **only** when manually run on `master` with
`deploy` selected. In repository Settings → Pages, choose **GitHub Actions** as the
source before the first publication. The archived frontend workflow no longer deploys
to Pages, preventing it from overwriting the course.

The default base path is `/testing-lectures/`. For a custom domain, set `COURSE_BASE=/`
for both the build and browser tests, and update `site` in `website/astro.config.mjs`.
Slides use hash routing so deep slide links work on static hosting. The preview reads
the actual base from the build metadata. No backend, credentials, analytics, or
student accounts are required.

## Sources and future work

The pilot reworks the original first lecture's lifecycle and application-wide testing
themes into a focused evidence/boundary exercise. See the bilingual course map for
the remaining 11 modules and later LLM-testing extension. No LLM module is presented
as complete in this pilot.

Framework references: [Starlight i18n](https://starlight.astro.build/guides/i18n/),
[Slidev animations](https://sli.dev/guide/animations),
[Slidev static hosting](https://sli.dev/guide/hosting),
[Node test runner](https://nodejs.org/api/test.html).
