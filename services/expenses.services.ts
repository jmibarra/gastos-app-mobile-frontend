import { IExpense } from "@/interfaces/expenses.model";
import { BASE_URL } from "../config";

export const getExpensesByPeriod = async (period: string, authToken: string): Promise<IExpense[]> => {
    const url = `{BASE_URL}/expenses/period/`;
    const urlWithPeriod = url + period;

    const response = await fetch(urlWithPeriod, {
        method: "GET",
        headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
        },
    });

    if (response.ok) return response.json().then((data) => data.expenses);
    else return [];
};

export const getExpensesByCategory = async (category: string, authToken: string): Promise<IExpense[]> => {
    const url = `{BASE_URL}/expenses/category/`;
    const urlWithCategory = url + category;

    const response = await fetch(urlWithCategory, {
        method: "GET",
        headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
        },
    });

    if (response.ok) return response.json().then((data) => data.expenses);
    else return [];
}

export const deleteExpenseById = async (id: string, authToken: string) => {
    const url = `{BASE_URL}/expenses/${id}`;

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
        },
    });
}

export const updateExpenseById = async (id: string, expense: IExpense, authToken: string) => {
    const url = `{BASE_URL}/expenses/${id}`;

    const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(expense),
        headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
        },
    });

    return response.json().then((data) => data);
}

export const createExpense = async (expense: IExpense, authToken: string) => {
    const url = `{BASE_URL}/expenses`;

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
        },
    })

    //Obtengo la respuesta del response y devuelvo el data
    return response.json().then((data) => data);
}