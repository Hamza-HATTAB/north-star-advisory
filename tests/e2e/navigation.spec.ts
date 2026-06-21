import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads and has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/North Star Advisory/);
  });

  test("skip link is visible on focus", async ({ page }) => {
    const skipLink = page.getByRole("link", { name: /skip to main content/i });
    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });

  test("navbar is visible and contains brand name", async ({ page }) => {
    const navbar = page.getByRole("banner");
    await expect(navbar).toBeVisible();
    await expect(navbar.getByText("North Star Advisory")).toBeVisible();
  });

  test("primary CTA button in navbar scrolls to contact form", async ({
    page,
  }) => {
    const ctaBtn = page.getByRole("button", {
      name: /request strategic review/i,
    }).first();
    await ctaBtn.click();
    // Contact section should be in view
    const contactSection = page.locator("#contact");
    await expect(contactSection).toBeInViewport({ ratio: 0.1 });
  });

  test("navbar remains sticky on scroll", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 500));
    const header = page.getByRole("banner");
    await expect(header).toBeVisible();
    const box = await header.boundingBox();
    expect(box?.y).toBe(0);
  });

  test("mobile menu opens and closes", async ({ page, isMobile }) => {
    if (!isMobile) {
      test.skip();
      return;
    }
    const menuBtn = page.getByRole("button", {
      name: /open navigation menu/i,
    });
    await menuBtn.click();
    const mobileNav = page.getByRole("dialog");
    await expect(mobileNav).toBeVisible();

    const closeBtn = page.getByRole("button", {
      name: /close navigation menu/i,
    });
    await closeBtn.click();
    await expect(mobileNav).not.toBeVisible();
  });

  test("all main sections are present", async ({ page }) => {
    for (const id of [
      "#growth-friction-index",
      "#methodology",
      "#case-studies",
      "#why-north-star",
      "#contact",
    ]) {
      const section = page.locator(id);
      await expect(section).toBeAttached();
    }
  });
});
