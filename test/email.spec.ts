import { expect, test } from "bun:test";
import { emailRegex } from "../src/app/(sidebar-layout)/email/EmailContent";

const re = new RegExp(emailRegex);

test("test@example.com", () => {
  expect(re.test("test@example.com")).toEqual(true);
});
