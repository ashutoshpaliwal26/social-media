import React from 'react'
import Link from 'next/link'

const SignUp = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex flex-col justify-center w-96  mt-2'>
                    <div className='w-full border border-gray-300 pb-3'>
                        <div className="flex justify-center w-full h-32 items-end pb-0">
                            {/* Instagram Logo */}
                            <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716572847/instagram/ofmdidm7oqfonidhro7q.png' width={175} className='hover: cursor-pointer' />
                        </div>
                        <div className="flex justify-center text-center w-full h-20 items-center p-10">
                            {/* Instagram Logo */}
                            <p className='text-xl font-extrabold text-gray-500'>Sign up to see photos and videos from your friends.</p>
                        </div>
                        <div className="flex justify-center w-full h-10 text-xs ">

                            <input className='w-60 h-8 p-2 font-light rounded-sm border border-gray-300' type='email' placeholder='Mobile No or Email' />
                        </div>
                        <div className="flex justify-center w-full h-10 font-light text-xs">
                            <input className='w-60 h-8 p-2 font-light rounded-sm border border-gray-300' type='text' placeholder='Full Name' />
                        </div>
                        <div className="flex justify-center w-full h-10 font-light text-xs">
                            <input className='w-60 h-8 p-2 font-light rounded-sm border border-gray-300' type='text' placeholder='Username' />
                        </div>
                        <div className="flex justify-center w-full h-10 font-light text-xs">
                            <input className='w-60 h-8 p-2 font-light rounded-sm border border-gray-300' type='password' placeholder='Password' />
                        </div>
                        
                        <div className="flex justify-center w-full h-10 pt-2">
                            <button className='w-60 h-8 bg-sky-500 rounded-md text-white text-xs font-extrabold' type='submit'>Sign Up</button>
                        </div>
                        <div className="flex justify-center w-full items-center h-10">
                            {/* Or and Hr tag */}
                            <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716572847/instagram/ub9gqiarhrudiqeqlmc2.png' className='w-60 h-4' />
                        </div>
                        <div className="flex justify-center items-center w-full h-10 hover:cursor-pointer">
                            {/* facbook Login  */}
                            <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716572847/instagram/dhaorgpzw28y7fhakvbo.png' className='w-40 h-6' />
                        </div>
                    </div>
                    <div className='flex items-center mt-6 justify-center w-full h-20 border border-gray-300 text-sky-600 text-sm font-semibold'>
                        <Link href={'#'}>All ready have account</Link>
                    </div>
                    <div className='flex justify-center m-2 pb-2'>
                        <span> Get the App</span>
                    </div>
                    <div className='flex justify-center'>
                        {/* Google Play  */}
                        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716572847/instagram/whovlhz5wu0cjf6mlcga.png' className='hover:cursor-pointer' />
                        {/* Microsoft Store */}
                        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716572847/instagram/vj4nudifpnpmxbhygwmk.png' className='hover:cursor-pointer' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp