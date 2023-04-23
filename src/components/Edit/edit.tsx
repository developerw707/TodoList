import React from 'react';

const Edit = () => {
    return (
        <React.Fragment>
            <div className='m-8'>
                <h2 className='text-2xl text-black-900 font-semibold mb-5'>Edit Task</h2>
                <div className='mb-6'>
                    <input type="text" id="large-input" className="block w-full p-4 text-md text-gray-900 border-b border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:outline-0 focus:ring-blue-500 focus:border-b-blue-500" placeholder='Title' required />
                </div>
                <div className='mb-6'>
                    <textarea id="description" name='descrpition' rows={20} className="block p-4 w-full text-md text-gray-900 bg-gray-100 rounded-lg border-b border-gray-300 focus:outline-0 focus:ring-blue-500 focus:border-blue-500" placeholder="Description"></textarea>
                </div>
                <div className='mb-6'>
                    <select className='block w-full p-4 text-md text-gray-900 border-b border-gray-300 rounded-t-lg bg-gray-100 sm:text-md focus:outline-0 focus:ring-blue-500 focus:border-b-blue-500'>
                        <option className='hover:bg-gray-500 md-5' value="inQA">inQA</option>
                        <option value="Done">Done</option>
                        <option value="ToDo">ToDo</option>
                    </select>
                </div>
                <div className='md:flex mb-6 gap-6'>
                    <div className='md:w-1/2 sm:w-auto mb-4'>
                        <button type='button' className='block w-full bg-sky-700 text-xl text-white border border-sky-700 rounded-lg p-3 hover:bg-sky-600'>
                            <span className='inline-block my-auto mr-2'>
                                <img className='w-5 fill-black hover:stroke-sky-700' src='/images/edit1.svg' />
                            </span> Edit
                        </button>
                    </div>
                    <div className='md:w-1/2 sm:w-auto'>
                        <button type='button' className='block w-full bg-gray-200 text-xl text-gray-400 border-2 border-gray-400 rounded-lg p-3 hover:bg-gray-600'>Cancel</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Edit;