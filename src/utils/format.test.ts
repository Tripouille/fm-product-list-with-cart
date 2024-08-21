import { describe, expect, test } from "vitest";

import { formatPrice } from "./format";

describe(formatPrice.name, () => {
  test("formats price with zero", async () => {
    expect(formatPrice(0)).toBe("$0.00");
  });

  test("formats price with positive value", async () => {
    expect(formatPrice(99.99)).toBe("$99.99");
  });
});
