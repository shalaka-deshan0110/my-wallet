import { Money } from "@/shared/Money";

export type ExpenseType = "necessary" | "discretionary";

export class Expense {
  readonly id: string;
  readonly title: string;
  readonly amount: Money;
  readonly category: string;
  readonly type: ExpenseType;
  readonly date: Date;

  constructor(params: {
    id: string;
    title: string;
    amount: Money;
    category: string;
    type: ExpenseType;
    date: Date;
  }) {
    const { id, title, amount, category, type, date } = params;

    if (!id) throw new Error("Expense must have an id");
    if (!title.trim()) throw new Error("Expense title is required");
    if (amount.getCents() <= 0) throw new Error("Expense amount must be > 0");
    if (!category.trim()) throw new Error("Expense category is required");
    if (!["necessary", "discretionary"].includes(type)) {
      throw new Error("Invalid expense type");
    }
    if (!(date instanceof Date)) throw new Error("Invalid date");

    this.id = id;
    this.title = title;
    this.amount = amount;
    this.category = category;
    this.type = type;
    this.date = date;
  }
}
