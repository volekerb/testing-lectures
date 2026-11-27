import { defineConfig } from '@playwright/test';
import { base } from './course.config.mjs';
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: `http://127.0.0.1:4321${base}`,
    viewport: { width: 1440, height: 1000 },
    channel: process.env.PW_CHANNEL || undefined,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run preview',
    url: `http://127.0.0.1:4321${base}en/`,
    reuseExistingServer: !process.env.CI,
    timeout: 15000,
  },
});
