const { test, expect } = require("@playwright/test");
const { validEmail, validPassword } = require("../user.js");
const { invalidEmail, invalidPassword } = require("../notAuthorizedUser.js");
const { timeout } = require("../playwright.config.js");

test.describe("Авторизация", () => {
  test("Успешная авторизация", async ({ page }) => {
    await page.goto("https://netology.ru/");
    await page.getByRole("link", { name: "Войти" }).click();
    await page.getByPlaceholder("Email").fill(validEmail);
    await page.getByPlaceholder("Пароль").fill(validPassword);
    await page.getByTestId("login-submit-btn").click();
    await expect(page.url()).toBe("https://netology.ru/profile/8611071");
    // await expect(
    //   page
    //     .getByTestId("header-top")
    //     .getByRole("link", { name: "Медиа Нетологии" })
    // ).toBeVisible();
  });

  test("Неуспешная авторизация", async ({ page }) => {
    await page.goto("https://netology.ru/");
    await page.getByRole("link", { name: "Войти" }).click();
    await page.getByPlaceholder("Email").fill(invalidEmail);
    await page.getByPlaceholder("Пароль").fill(invalidPassword);
    await page.getByTestId("login-submit-btn").click();
    await expect(page.getByTestId("login-error-hint")).toBeVisible();
  });
});
