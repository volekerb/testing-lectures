<script setup>
import { computed } from 'vue';
import { configs, useNav } from '@slidev/client';
const { currentPage } = useNav();
const locale = configs.htmlAttrs?.lang || 'en';
const otherLocale = locale === 'en' ? 'ru' : 'en';
const base = import.meta.env.VITE_COURSE_BASE || '/testing-lectures/';
const courseOrigin = import.meta.env.DEV ? 'http://127.0.0.1:4321' : '';
const otherHref = computed(() => import.meta.env.DEV
  ? `http://localhost:${otherLocale === 'en' ? 3030 : 3031}/${currentPage.value}`
  : `${base}slides/${otherLocale}/foundations/#/${currentPage.value}`);
</script>
<template>
  <footer class="course-slide-footer">
    <a :href="`${courseOrigin}${base}${locale}/lessons/foundations/`">{{ locale === 'ru' ? 'Текст урока' : 'Lesson reading' }}</a>
    <span>{{ locale === 'ru' ? 'Основы тестирования' : 'Testing foundations' }}</span>
    <a :href="otherHref" :lang="otherLocale">{{ otherLocale === 'ru' ? 'Русский' : 'English' }}</a>
    <span class="slide-number">{{ currentPage }}</span>
  </footer>
</template>
