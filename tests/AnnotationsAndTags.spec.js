import { test } from "@playwright/test";

test.skip("Test One", async ({ page }) => {});

test("not yet ready", async ({ page }) => {
  test.fail();
});

test.fixme("test to be fixed", async () => {});

test("Slow test", async ({ page }) => {
  test.slow();
});

//tags

test("Test login page @smoke", async ({ page }) => {});
