export class Money {
  private cents: number;

  private constructor(cents: number) {
    if (!Number.isInteger(cents)) {
      throw new Error("Money must be stored as integer cents");
    }
    this.cents = cents;
  }

  static fromDecimal(amount: number): Money {
    if (isNaN(amount)) throw new Error("Amount is not a number");
    const cents = Math.round(amount * 100);
    return new Money(cents);
  }

  static fromCents(cents: number): Money {
    return new Money(cents);
  }

  toDecimal(): number {
    return this.cents / 100;
  }

  getCents(): number {
    return this.cents;
  }

  add(other: Money): Money {
    return new Money(this.cents + other.cents);
  }

  subtract(other: Money): Money {
    return new Money(this.cents - other.cents);
  }
}
