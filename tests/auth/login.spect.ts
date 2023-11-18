import { test, expect } from "@playwright/test";

test("Auth/Login", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Qwik/);

  // create a locator
  const anchor = page.locator("a.mindblow");

  // Expect an attribute "to be strictly equal" to the value.
  await expect(anchor).toHaveAttribute("href", "/flower");
});
