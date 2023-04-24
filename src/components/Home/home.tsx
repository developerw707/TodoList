import React, { useState } from 'react';
import './home.css';
import { Provider as TodoProvider } from "../../context/TodoContext";
import AddTodoContext from '../AddTodoContext';
import Edit from '../Edit/edit';
import TodoList from '../TodoList';
import { ITodoItem } from '../../interface';
import { title } from 'process';
const Home = () => {
    const [editShowCase, setEditShowCase] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<ITodoItem>();
    const showEditPannel = (value: boolean, todoItem: ITodoItem): void => {
        setEditShowCase(value);
        setEditItem(todoItem);
    }
    if (editShowCase) {
        return (
            <React.Fragment>
                <TodoProvider>
                    {editItem? (<Edit data={editItem}/>): ("")}
                </TodoProvider>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <TodoProvider>
                    <AddTodoContext />
    
                    <TodoList showEditPannel={showEditPannel} />
    
                </TodoProvider>
    
            </React.Fragment >
        )
    }
    
}

export default Home;