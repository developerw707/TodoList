import React from 'react';

export interface ITodoItem {
    id: string,
    title: string,
    description: string,
    status: string
}

export interface ICounterState {
    todos: ITodoItem[]
}

export interface IContextModel {
    state: ICounterState,
    dispatch: React.Dispatch<ICounterAction>
}

export type ICounterAction = 
    | {type: 'ADD'; payload: ITodoItem}
    | {type: 'Update'; payload: ITodoItem};