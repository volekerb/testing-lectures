<script setup>
import { configs } from '@slidev/client';
const props = defineProps({ page: { type: String, default: 'labs/registration/' } });
const locale = configs.htmlAttrs?.lang || 'en';
const base = import.meta.env.VITE_COURSE_BASE || '/testing-lectures/';
const courseOrigin = import.meta.env.DEV ? 'http://127.0.0.1:4321' : '';
</script>
<template><a class="slide-action" :href="`${courseOrigin}${base}${locale}/${page}`"><slot /></a></template>
