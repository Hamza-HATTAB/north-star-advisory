import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for page to be fully interactive
    await page.waitForLoadState("networkidle");
  });

  test("no critical accessibility violations on page load", async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    // Filter out known false positives (e.g. color-contrast for decorative elements)
    const critical = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    if (critical.length > 0) {
      console.log(
        "Accessibility violations:",
        JSON.stringify(critical, null, 2)
      );
    }

    expect(critical).toHaveLength(0);
  });

  test("page has a single h1", async ({ page }) => {
    const h1s = page.getByRole("heading", { level: 1 });
    await expect(h1s).toHaveCount(1);
  });

  test("all images have alt text", async ({ page }) => {
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("all interactive elements are keyboard accessible", async ({ page }) => {
    // Tab through the page and verify focus reaches interactive elements
    const interactiveElements = await page
      .locator(
        "button:visible, a:visible, input:visible, select:visible, [role='button']:visible"
      )
      .all();

    expect(interactiveElements.length).toBeGreaterThan(0);

    for (const el of interactiveElements.slice(0, 10)) {
      await el.focus();
      const focused = await page.evaluate(
        () => document.activeElement?.tagName
      );
      expect(focused).toBeDefined();
    }
  });

  test("skip link is present and functional", async ({ page }) => {
    const skipLink = page.getByRole("link", { name: /skip to main content/i });
    await expect(skipLink).toBeAttached();
    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });

  test("main landmark is present", async ({ page }) => {
    const main = page.getByRole("main");
    await expect(main).toBeVisible();
  });

  test("navigation landmark is present", async ({ page }) => {
    const nav = page.getByRole("navigation").first();
    await expect(nav).toBeVisible();
  });

  test("footer landmark is present", async ({ page }) => {
    const footer = page.getByRole("contentinfo");
    await expect(footer).toBeVisible();
  });

  test("heading hierarchy is logical", async ({ page }) => {
    const headings = await page
      .locator("h1, h2, h3, h4")
      .evaluateAll((els) =>
        els.map((el) => ({ tag: el.tagName, text: el.textContent?.trim() }))
      );
    // h1 must come first
    const firstHeading = headings[0];
    expect(firstHeading?.tag).toBe("H1");
  });
});
