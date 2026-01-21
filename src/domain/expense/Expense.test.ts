import { Money } from "@/shared/Money";
import { Expense } from "./Expense";

describe("Expense", () => {
  const validData = {
    id: "1",
    title: "Milk",
    amount: Money.fromDecimal(10),
    category: "Food",
    type: "necessary" as const,
    date: new Date(),
  };

  test("creates valid expense", () => {
    const e = new Expense(validData);
    expect(e.title).toBe("Milk");
    expect(e.amount.toDecimal()).toBe(10);
  });

  test("fails if amount <= 0", () => {
    expect(
      () =>
        new Expense({
          ...validData,
          amount: Money.fromDecimal(0),
        }),
    ).toThrow();
  });

  test("fails if title empty", () => {
    expect(
      () =>
        new Expense({
          ...validData,
          title: " ",
        }),
    ).toThrow();
  });

  test("fails if category empty", () => {
    expect(
      () =>
        new Expense({
          ...validData,
          category: "",
        }),
    ).toThrow();
  });

  test("fails for invalid type", () => {
    expect(
      () =>
        new Expense({
          ...validData,
          type: "luxury" as any,
        }),
    ).toThrow();
  });
});
