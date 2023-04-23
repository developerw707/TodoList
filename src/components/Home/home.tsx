import React from 'react';
import './home.css';
import { Provider as TodoProvider } from "../../context/TodoContext";
import AddTodoContext from '../AddTodoContext';
import TodoList from '../TodoList';
const Home = () => {
    return (
        <React.Fragment>
            <TodoProvider>
                <AddTodoContext />

                <div className='bg-sky-700 rounded-t-2xl mt-8 md:mt-16'>
                    <div className='bg-sky-700 rounded-t-2xl'>
                        <h2 className='text-2xl text-white font-semibold py-5 px-10'>Tasks</h2>
                    </div>
                    <div className='bg-sky-300 rounded-t-2xl p-2'>
                        <div className=' h-96 overflow-y-auto p-4 md:p-8'>
                            <TodoList />
                        </div>

                    </div>
                </div>
            </TodoProvider>

        </React.Fragment >
    )
}

export default Home;