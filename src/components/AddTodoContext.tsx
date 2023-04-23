import React, { FormEvent, useContext, useState } from "react";
import { Context as TodoContext } from "../context/TodoContext";
import { addTodo } from "../actions/TodoActions";

const AddTodoContext: React.FC = () => {
    const { dispatch } = useContext(TodoContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        if (title === "") {
            return;
        }

        dispatch(
            addTodo({
                id: new Date().getTime().toString(),
                title: title,
                description: description,
                status: 'Todo'
            })
        );

    };

    return (
        <form>
            <div className='m-8'>
                <h2 className='text-2xl text-black-900 font-semibold mb-5'>Add new Task</h2>
                <div className='mb-6'>
                    <input type="text" onChange={e => setTitle(e.target.value)} className="block w-full p-4 text-md text-gray-900 border-b border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:outline-0 focus:ring-blue-500 focus:border-b-blue-500" placeholder='Title' required />
                </div>
                <div className='mb-6'>
                    <textarea id="description" onChange={e => setDescription(e.target.value)} name='descrpition' rows={7} className="block p-2.5 w-full text-md text-gray-900 bg-gray-100 rounded-lg border-b border-gray-300 focus:outline-0 focus:ring-blue-500 focus:border-blue-500" placeholder="Description"></textarea>
                </div>
                <div className='mb-6'>
                    <button type='button' onClick={submitHandler} className='block w-full bg-sky-700 text-xl text-white border border-sky-700 rounded-lg p-3 hover:bg-sky-600'><span className='text-bold text-3xl'>+</span> Add</button>
                </div>

            </div>
        </form>
    );
};

export default AddTodoContext;