import React from 'react'

const CreatePost = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='w-6/12 h-fit border border-gray-400 rounded-2xl'>
                <div className='flex items-center justify-center border-b border-gray-400 h-10 w-full'>
                    <h1 className='text-2xl font-normal'>Create Post</h1>
                </div>
                <div className='flex flex-col justify-center items-center w-full h-full p-20'>
                    <div className='w-fit'>
                        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716622492/instagram/wguubkf1lsciblu33blp.png' />
                    </div>
                    <h1 className='m-4'>Drag Photo and Video Here</h1>
                    <button type='file' className='m-4 bg-sky-500 text-white rounded-lg p-2 hover:bg-sky-700'>Select from Computer</button>
                </div>
            </div>

        </div>
    )
}

export default CreatePost;