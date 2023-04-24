import { ITodoItem, ICounterAction } from "../interface";
// Add Action Defining
export const addTodo = (todo:ITodoItem): ICounterAction => ({
    type: 'ADD',
    payload: todo
});
// Update Action Defining
export const updateTodo = (updateTodo:ITodoItem): ICounterAction => ({
    type: 'Update',
    payload: updateTodo
});