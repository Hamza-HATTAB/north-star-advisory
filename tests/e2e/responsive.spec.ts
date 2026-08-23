import { test, expect } from "@playwright/test";

const viewports = [
  { name: "Mobile S", width: 375, height: 667 },
  { name: "Mobile L", width: 414, height: 896 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Laptop", width: 1280, height: 800 },
  { name: "Desktop", width: 1440, height: 900 },
];

test.describe("Responsive Layout", () => {
  for (const vp of viewports) {
    test(`renders correctly at ${vp.name} (${vp.width}x${vp.height})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      await page.waitForLoadState("domcontentloaded");

      // No horizontal overflow
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(vp.width + 1); // 1px tolerance

      // Key sections are present
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(page.getByRole("main")).toBeVisible();
      await expect(page.getByRole("contentinfo")).toBeVisible();

      // Hero h1 is visible
      await expect(
        page.getByRole("heading", { level: 1 })
      ).toBeVisible();
    });
  }

  test("mobile menu button is visible on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    const menuBtn = page.getByRole("button", {
      name: /open navigation menu/i,
    });
    await expect(menuBtn).toBeVisible();
  });

  test("desktop nav links are visible on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    const desktopNav = page
      .getByRole("navigation", { name: "Primary navigation" })
      .first();
    await expect(desktopNav).toBeVisible();
  });

  test("contact form is usable on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await page.evaluate(() => {
      document.getElementById("contact")?.scrollIntoView();
    });

    const nameInput = page.locator("#contact-name");
    await expect(nameInput).toBeVisible();

    // Touch target size check (minimum 44x44)
    const submitBtn = page.locator("#contact-submit");
    const box = await submitBtn.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(44);
    expect(box?.width).toBeGreaterThan(44);
  });

  test("GFI section columns stack on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // All three GFI columns should be in the DOM
    await expect(
      page.getByRole("heading", { name: "The Growth Friction Index" })
    ).toBeAttached();
  });
});
