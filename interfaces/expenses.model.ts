import { ICategory } from "./category.model";
import { IStatus } from "./status.model";

export interface IExpense {
    _id: string;
    title: string;
    dueDate?: string;
    period: string;
    status: IStatus | string;
    category?: ICategory | string;
    amount?: number;
    type?: string;
    owner?: string;
}