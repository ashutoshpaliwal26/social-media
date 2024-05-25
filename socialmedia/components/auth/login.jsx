'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { email, password };
            const responce = await axios.post('/api/login', JSON.parse(data));
            console.log(responce.data);
        }
        catch (err) {
            console.log(err);
        }
        setEmail('');
        setPassword('');
    }


    return (
        <div className='flex justify-center grid-rows-2 '>
            <div className=''>
                {/* Phone Image */}
                <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716572848/instagram/kwjb5zcsd9zzwqtcs34y.png' width={400} />
            </div>
            <div className='flex flex-col justify-center w-96  mt-2'>
                <div className='w-full border border-gray-300 pb-3'>
                    <div className="flex justify-center w-full h-40 items-center">
                        {/* Instagram Logo */}
                        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716572847/instagram/ofmdidm7oqfonidhro7q.png' width={175} className='hover: cursor-pointer' />
                    </div>
                    <form onSubmit={handelSubmit}>
                        <div className="flex justify-center w-full h-10 text-xs ">

                            <input className='w-60 h-8 p-2 font-light rounded-sm border border-gray-300' type='email' placeholder='Email, username , phone no' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="flex justify-center w-full h-10 font-light text-xs">
                            <input className='w-60 h-8 p-2 font-light rounded-sm border border-gray-300' type='password' placeholder='Password' name='password' value={password} onChange={(e) => { setPassword(e.target.password) }} />
                        </div>
                        <div className="flex justify-center w-full h-10 pt-2">
                            <button className='w-60 h-8 bg-sky-500 rounded-md text-white text-xs font-extrabold' type='submit'>Log in</button>
                        </div>

                    </form>
                    <div className="flex justify-center w-full items-center h-10">
                        {/* Or and Hr tag */}
                        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716572847/instagram/ub9gqiarhrudiqeqlmc2.png' className='w-60 h-4' />
                    </div>
                    <div className="flex justify-center items-center w-full h-10 hover:cursor-pointer">
                        {/* facbook Login  */}
                        <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716572847/instagram/dhaorgpzw28y7fhakvbo.png' className='w-40 h-6' />
                    </div>
                    <div className="flex justify-center items-center text-sm font-light text-blue-950 w-full h-10">
                        <Link href='#'>Forgote password?</Link>
                    </div>
                </div>
                <div className='flex items-center mt-6 justify-center w-full h-20 border border-gray-300 text-sky-600 text-sm font-semibold'>
                    <Link href={'#'}>Create new account</Link>
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
    )
}

export default Login;