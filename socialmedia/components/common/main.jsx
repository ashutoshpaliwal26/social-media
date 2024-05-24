import React from 'react'
import Post from './post'

const Main = () => {
  return (
    <div className='flex grid-rows-2 w-full'>
        <div className='flex justify-center pt-10 w-8/12 h-screen '>       
            <Post
                imageurl={"https://static.toiimg.com/photo/102764798.cms"}
                name={"Ashutosh Paliwal"}
                username={"ashutosh_paliwal001"}
                caption={"Hello world"}
                likes={"1234456"}
                profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}
                
            />
        </div>
        <div className='w-4/12 h-screen border-l border-gray-300'>
                Post
        </div>
    </div>
  )
}

export default Main