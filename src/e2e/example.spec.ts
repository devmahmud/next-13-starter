import { expect, test } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
	// Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
	await page.goto("/");
	// The home page should contain an h1 with "Next.js Starter Template"
	await expect(page.locator("h1")).toContainText("Next.js Starter Template");
});
