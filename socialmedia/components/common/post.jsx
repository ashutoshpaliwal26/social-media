import React from 'react'

const Post = ({username, name , caption , imageurl , profileurl , likes}) => {
    return (
        <div className='flex flex-col bg-white w-8/12'>
            {/* User Profie , UserName and ALL */}
            <div className='flex items-center justify-between p-3 h-20 w-ful'>
                <div className='flex justify-start items-center'>
                    {/* proflie */}
                    <div className='w-14 h-14  rounded-full hover:cursor-pointer'>
                        <img src={profileurl} className='h-full w-full object-cover rounded-full' />

                    </div>

                    <div className='flex flex-col pl-4 hover: cursor-pointer'>
                        <div>
                            <p className='font-bold text-xl'>{username}</p>
                        </div>
                        <div>
                            <p className='text-xl'>{name}</p>
                        </div>
                    </div>
                    <div className='pl-4 font-extrabold'>
                        <li>3d</li>
                    </div>

                </div>
                <div className='w-10 h-10 hover:cursor-pointer'>
                    <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716587706/instagram/nqszha1hlo9jowdoyrmo.png' className='h-full w-full object-cover' />
                </div>
            </div>
            {/* Post  */}
            <div className='w-full'>
                <img className='w-full' src={imageurl} />
            </div>
            {/* Like comment Share */}

            <div className='flex justify-between'>

                <div className='flex'>
                    <div className='w-12 h-12 p-3 hover:cursor-pointer'>
                        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580772/instagram/myeolvvapry2ytvr4f6n.png' className='h-full w-full object-cover' />
                    </div>
                    <div className='w-12 h-12 p-3 hover:cursor-pointer'>
                        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716587025/instagram/zbstkuxb07eak3lgif2u.png' className='h-full w-full object-cover' />
                    </div>
                    <div className='w-12 h-12 p-3 hover:cursor-pointer'>
                        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716587006/instagram/mnhzenugv1obtqsoes1k.png' className='h-full w-full object-cover' />
                    </div>
                </div>
                <div className='w-12 h-12  p-3 hover:cursor-pointer'>
                    <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716587018/instagram/no270efkqkxtosowdmlj.png' className='h-full w-full object-cover' />
                </div>

            </div>
            {/* Show Likes */}

            <div className='flex items-center pl-3'>
                <div className=' w-4 h-4  rounded-full'>
                    <img src='https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446' className='h-full w-full object-cover rounded-full' />
                </div>
                <div className='flex font-bold pl-2'>
                    <p>{likes} Likes</p>
                </div>
            </div>



            {/* Caption and Comment Input  */}
            <div className='pl-3'>
                <p className='font-normal pt-1'>{caption}</p>
                <p className='font-light pt-1'>View all 10 Comment</p>
                <input className='pt-1 text-xl border-none select-none' type='text' placeholder='Add Comment'/>
            </div>
            <hr/>
        </div>
    )
}

export default Post