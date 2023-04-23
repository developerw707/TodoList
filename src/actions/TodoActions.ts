import { ITodoItem, ICounterAction } from "../interface";

export const addTodo = (todo:ITodoItem): ICounterAction => ({
    type: 'ADD',
    payload: todo
});

export const editTodo = (id:string): ICounterAction => ({
    type: 'Edit',
    payload: id
});