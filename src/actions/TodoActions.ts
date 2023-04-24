import { ITodoItem, ICounterAction } from "../interface";

export const addTodo = (todo:ITodoItem): ICounterAction => ({
    type: 'ADD',
    payload: todo
});

export const updateTodo = (updateTodo:ITodoItem): ICounterAction => ({
    type: 'Update',
    payload: updateTodo
});