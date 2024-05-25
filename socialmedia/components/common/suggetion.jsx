import React from 'react'

const Suggetion = () => {
    return (
        <>
            <div className='flex justify-between p-8'>
                <div className='flex items-center'>

                    <div className='w-10 h-10 rounded-full bg-slate-400 hover:cursor-pointer'>
                        <img src="https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446" className='h-full w-full object-cover rounded-full' />
                    </div>
                    <div className='text-xs pl-3'>
                        <div>
                            <p className='font-bold hover:cursor-pointer'>ashutosh_paliwal001</p>
                        </div>
                        <div>
                            <p>Ashutosh Paliwal</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center h-10 text-xs font-bold text-blue-600 hover:cursor-pointer'>
                    <p>Switch</p>
                </div>
            </div>
            <div className='flex justify-between pl-8 pr-8 mb-8'>
                <div>
                    <p className='text-xs font-bold text-gray-500'>Suggetion for you</p>
                </div>
                <div>
                    <p className='text-xs hover:cursor-pointer'>See All</p>
                </div>
            </div>
            <div className='flex flex-col'>

                <Suggested
                    name={"Ashutosh Paliwal"}
                    profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}
                    username={"ashutosh_paliwal001"}
                />
                <Suggested
                    name={"Ashutosh Paliwal"}
                    profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}
                    username={"ashutosh_paliwal001"}
                />
                <Suggested
                    name={"Ashutosh Paliwal"}
                    profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}
                    username={"ashutosh_paliwal001"}
                />
                <Suggested
                    name={"Ashutosh Paliwal"}
                    profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}
                    username={"ashutosh_paliwal001"}
                />
                <Suggested
                    name={"Ashutosh Paliwal"}
                    profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}
                    username={"ashutosh_paliwal001"}
                />
            </div>
        </>
    )
}


export const Suggested = ({ profileurl, name, username }) => {
    return (
        <>
            <div className='flex justify-between pl-8 pr-8 pb-4'>
                <div className='flex items-center'>

                    <div className='w-10 h-10 rounded-full bg-slate-400 hover:cursor-pointer'>
                        <img src={profileurl} className='h-full w-full object-cover rounded-full' />
                    </div>
                    <div className='text-xs pl-3'>
                        <div>
                            <p className='font-bold hover:cursor-pointer'>{username}</p>
                        </div>
                        <div>
                            <p>{name}</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center h-10 text-xs font-bold text-blue-600 hover:cursor-pointer'>
                    <p>follow</p>
                </div>
            </div>

        </>
    )
}


export default Suggetion