import React, { useReducer } from 'react';
import { ICounterState, IContextModel, ICounterAction } from '../interface';

const defaultState: ICounterState = {
    todos: []
};
// Reducer Function
const reducer = (state: ICounterState, action: ICounterAction): ICounterState => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'Update':
            return {
                ...state,
                todos: state.todos.map(item => item.id == action.payload.id ? Object.assign({}, item, action.payload): item)
            }
        default:
            return state
    }
};
// Context Defining
export const Context = React.createContext({} as IContextModel);

interface Props {
    children: React.ReactNode;
}

export const Provider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    );
};

