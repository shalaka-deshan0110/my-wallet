import { Money } from "./Money";

describe("Money", () => {
  test("creates from decimal safely", () => {
    const m = Money.fromDecimal(10.5);
    expect(m.getCents()).toBe(1050);
  });

  test("converts back to decimal", () => {
    const m = Money.fromCents(1234);
    expect(m.toDecimal()).toBe(12.34);
  });

  test("adds money correctly", () => {
    const a = Money.fromDecimal(10);
    const b = Money.fromDecimal(5.25);
    const c = a.add(b);
    expect(c.toDecimal()).toBe(15.25);
  });

  test("rejects non-integer cents", () => {
    expect(() => Money.fromCents(10.2 as any)).toThrow();
  });
});
