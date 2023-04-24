import React, { useContext } from 'react';
import { Context as TodoContext } from '../context/TodoContext';
import { ITodoItem } from '../interface';

interface IfirstChildProps {
    showEditPannel: (arg: boolean, todoItem: ITodoItem) => void

}

const TodoList: React.FC<IfirstChildProps> = ({ showEditPannel }) => {
    const {
        state: { todos }
    } = useContext(TodoContext);

    return todos.length > 0 ? (
        <div className='bg-sky-700 rounded-t-2xl mt-8 md:mt-16'>
            <div className='bg-sky-700 rounded-t-2xl'>
                <h2 className='text-2xl text-white font-semibold py-5 px-10'>Tasks</h2>
            </div>
            <div className='bg-sky-300 rounded-t-2xl p-2'>
                <div className=' h-96 overflow-y-auto p-4 md:p-8'>
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
                                        <button type='button' onClick={() => showEditPannel(true, item)}>
                                            <img className='w-7 fill-black hover:stroke-sky-700' src='/images/edit.svg' />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className='bg-sky-700 rounded-t-2xl mt-8 md:mt-16'>
            <div className='bg-sky-700 rounded-t-2xl'>
                <h2 className='text-2xl text-white font-semibold py-5 px-10'>Tasks</h2>
            </div>
            <div className='bg-sky-300 rounded-t-2xl p-2'>
                <div className=' h-96 overflow-y-auto p-4 md:p-8'>
                    <h2 className='text-center mt-36 text-2xl font-bold'>No Todo's!</h2>
                </div>
            </div>
        </div>
    )
}

export default TodoList;