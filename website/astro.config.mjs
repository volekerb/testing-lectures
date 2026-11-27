import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { base } from '../course.config.mjs';
import focusableTables from './plugins/focusable-tables.mjs';

export default defineConfig({
  site: 'https://brekelov.com',
  base,
  outDir: '../dist',
  trailingSlash: 'always',
  markdown: { rehypePlugins: [focusableTables] },
  integrations: [starlight({
    title: { en: 'Testing, in practice', ru: 'Тестирование на практике' },
    description: 'A practical bilingual course in software testing.',
    defaultLocale: 'en',
    locales: { en: { label: 'English', lang: 'en' }, ru: { label: 'Русский', lang: 'ru' } },
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/volekerb/testing-lectures' }],
    customCss: ['./src/styles/course.css'],
    components: { Hero: './src/components/CourseHero.astro' },
    editLink: { baseUrl: 'https://github.com/volekerb/testing-lectures/edit/master/website/' },
    sidebar: [
      { slug: 'start', label: 'Start here', translations: { ru: 'Как учиться' } },
      { slug: 'lessons/foundations', label: '01. Testing foundations', translations: { ru: '01. Основы тестирования' } },
      { slug: 'lessons/foundations-sources', label: 'Lecture sources', translations: { ru: 'Источники лекции' } },
      { slug: 'labs/registration', label: 'Lab: the last seat', translations: { ru: 'Практика: последнее место' } },
      { slug: 'labs/solution', label: 'Lab walkthrough', translations: { ru: 'Разбор практики' } },
      { slug: 'glossary', label: 'Glossary', translations: { ru: 'Словарь' } },
      { slug: 'course', label: 'Course map & archive', translations: { ru: 'Программа и архив' } },
    ],
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    head: [{ tag: 'meta', attrs: { name: 'theme-color', content: '#176859' } }],
  })],
});
