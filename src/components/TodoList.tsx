import React, { useContext } from 'react';
import { Context as TodoContext } from '../context/TodoContext';

const TodoList: React.FC = () => {
    const {
        state: { todos }
    } = useContext(TodoContext);

    return todos.length > 0 ? (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10'>
            {
                todos.map((item) => (
                    <div className='bg-gray-50 p-4 boder border-gray-100 rounded-lg shadow-lg'>
                        <h3 className='text-gray-900 text-lg font-bold'>{item.title}</h3>
                        <p className='text-md text-gray-900 mt-7'>{item.description}</p>
                        <div className='flex justify-between mt-10'>
                            <div className='w-7/12 bg-sky-700 p-4 text-center text-gray-100 font-semibold text-lg rounded-lg'>
                                {item.status}
                            </div>
                            <button type='button'>
                                <img className='w-7 fill-black hover:stroke-sky-700' src='/images/edit.svg' />
                            </button>
                        </div>
                    </div>
                ))
            }

        </div>
    ) : (
        <h2>No Todo's!</h2>
    )
}

export default TodoList;