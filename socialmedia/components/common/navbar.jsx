'use client';
import React from 'react'
import Link from 'next/link';



const Navbar = () => {

    const navItem = [
        {
            id: 1,
            logo: 'https://res.cloudinary.com/djfi9rtlx/image/upload/v1716581127/instagram/jjppjykuqbs6p9h8asps.png',
            boldLogo : 'https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580773/instagram/sc2fnuy6lo27onkzygyt.png',
            title: 'Home',
            url : '/'
        },
        {
            id: 2,
            logo: 'https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580773/instagram/t22roglmduetwjv3sswl.png',
            title: 'Search',
            url : '/search'
        },
        {
            id: 3,
            logo: 'https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580772/instagram/zdpa8fm3p4es0hgtvh5w.png',
            title: 'Explore',
            url : "/explore"
        },
        {
            id: 4,
            logo: 'https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580772/instagram/xue9lgdh8qjs3wbcsi2r.png',
            title: 'Reel',
            url : "/reel"
        },
        {
            id: 5,
            logo: 'https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580773/instagram/ereyicypv6ntxbuwt0jr.png',
            title: 'Messages',
            url : "/message"
        },
        {
            id: 6,
            logo: 'https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580772/instagram/myeolvvapry2ytvr4f6n.png',
            title: 'Notifications',
            url : "/notifications"
        },
        {
            id: 7,
            logo: 'https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580773/instagram/ph40x3zvgintvfsjyiuu.png',
            title: 'Create',
            url : "/create",
        }
    ]
    return (
        <div className='fixed flex flex-col p-4 w-60'>
            <div className='flex items-center w-full h-20 justify-center pr-8'>
                <img src='https://res.cloudinary.com/djfi9rtlx/image/upload/v1716572847/instagram/ofmdidm7oqfonidhro7q.png' width={130} className='hover: cursor-pointer' />
            </div>
            {navItem.map((ele) => {
                
                return (

                    <Link href={ele.url}>

                    <div className='flex justify-start p-3 pl-3 mt-2 rounded-xl hover:bg-gray-200' key={ele.id} >
                        {/* Home */}
                        <div>
                            {/* Home Logo */}
                            <img src={ele.logo} className='w-10 rounded-full' />
                        </div>
                        <div className='pl-4 flex items-center text-xl from-neutral-300'>
                            <p>{ele.title}</p>
                        </div>
                    </div>
                    </Link>
                )
            })}

        </div>
    )
}

export default Navbar