import React, { useState } from 'react';
import './home.css';
import { Provider as TodoProvider } from "../../context/TodoContext";
import AddTodoContext from '../AddTodoContext';
import Edit from '../Edit/edit';
import TodoList from '../TodoList';
import { ITodoItem } from '../../interface';
const Home = () => {
    // Initial Data Setting
    const [editShowCase, setEditShowCase] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<ITodoItem>();
    const showEditPannel = (value: boolean, todoItem?: ITodoItem): void => {
        setEditShowCase(value);
        setEditItem(todoItem);
    }
    // Showing Edit Pannel
    if (editShowCase) {
        return (
            <React.Fragment>
                <TodoProvider>
                    <div className='bg-sky-700'>
                        <h3 className='text-2xl py-4 pl-8 text-white'>Task Management <span>&rsaquo;</span> Edit</h3>
                    </div>
                    {editItem ? (<Edit data={editItem} showEditPannel={showEditPannel} />) : ("")}
                </TodoProvider>
            </React.Fragment>
        )
    } else {
    // Home Pannel Showing
        return (
            <React.Fragment>
                <TodoProvider>
                    <div className='bg-sky-700'>
                        <h3 className='text-2xl py-4 pl-8 text-white'>Task Management <span>&rsaquo;</span> Home</h3>
                    </div>
                    <AddTodoContext />

                    <TodoList showEditPannel={showEditPannel} />

                </TodoProvider>

            </React.Fragment >
        )
    }

}

export default Home;