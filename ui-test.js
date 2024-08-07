import { browser } from 'k6/experimental/browser';
import { check } from 'k6';

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      vus:2,
      iterations: 2,
      options: {
        browser: {
          type: 'chromium',
          headless: false
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto("https://seam.riskscore.cards/");

    await page.locator('#email').type("fatih.kir@superadmin.com");
    

    await Promise.all([
      page.waitForNavigation(),
      page.locator('#usernameForm>div:nth-of-type(3)>button').click(),
    ]);

    let header = await page.locator("#loginForm h2").textContent();
    check(header, {
      header: (h) => h == "Just One Step",
    });

    await page.locator('#password').type("Test.123_*-");

    await Promise.all([
      page.waitForNavigation(),
      page.locator("button[type='submit']").click(),
    ]);

    header = await page.locator("#tour-profile-menubtn").textContent();

    check(header, {
      header: (h) => h == "SF",
    });
  } finally {
    await page.close();
  }
}