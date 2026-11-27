// Override for a custom domain with COURSE_BASE=/ npm run build.
export const base = (process.env.COURSE_BASE || '/testing-lectures/').replace(/\/?$/, '/');
if (!base.startsWith('/') || base.includes('..') || /[?#]/.test(base)) {
  throw new Error('COURSE_BASE must be an absolute URL path, e.g. /testing-lectures/');
}
export const locales = ['en', 'ru'];
