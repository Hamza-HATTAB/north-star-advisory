import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
    // Scroll form into view
    await page.evaluate(() => {
      document.getElementById("contact")?.scrollIntoView();
    });
  });

  test("form is present with all required fields", async ({ page }) => {
    await expect(page.locator("#contact-name")).toBeVisible();
    await expect(page.locator("#contact-email")).toBeVisible();
    await expect(page.locator("#contact-company")).toBeVisible();
    await expect(page.locator("#contact-industry")).toBeVisible();
    await expect(page.locator("#contact-companySize")).toBeVisible();
    await expect(page.locator("#contact-bottleneck")).toBeVisible();
    await expect(page.locator("#contact-submit")).toBeVisible();
  });

  test("shows validation errors on empty submit", async ({ page }) => {
    await page.locator("#contact-submit").click();
    // Name and email errors should appear
    await expect(page.locator("#name-error")).toBeVisible();
    await expect(page.locator("#email-error")).toBeVisible();
  });

  test("shows email validation error for invalid email", async ({ page }) => {
    await page.fill("#contact-name", "Test User");
    await page.fill("#contact-email", "not-an-email");
    await page.locator("#contact-submit").click();
    await expect(page.locator("#email-error")).toBeVisible();
  });

  test("submit button has correct label text", async ({ page }) => {
    const btn = page.locator("#contact-submit");
    await expect(btn).toContainText(/request a growth systems diagnostic/i);
  });

  test("form fields have correct accessibility attributes", async ({ page }) => {
    // Name field
    const nameInput = page.locator("#contact-name");
    await expect(nameInput).toHaveAttribute("aria-required", "true");

    // Email field
    const emailInput = page.locator("#contact-email");
    await expect(emailInput).toHaveAttribute("aria-required", "true");
    await expect(emailInput).toHaveAttribute("type", "email");

    // Labels exist
    const nameLabel = page.locator("label[for='contact-name']");
    await expect(nameLabel).toBeVisible();

    const emailLabel = page.locator("label[for='contact-email']");
    await expect(emailLabel).toBeVisible();
  });

  test("error messages are linked to inputs via aria-describedby", async ({
    page,
  }) => {
    await page.locator("#contact-submit").click();
    // After validation, inputs should have aria-describedby pointing to error elements
    const nameInput = page.locator("#contact-name");
    await expect(nameInput).toHaveAttribute("aria-invalid", "true");
    await expect(nameInput).toHaveAttribute("aria-describedby", "name-error");
  });
});
