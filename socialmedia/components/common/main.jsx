import React from 'react'
import Post from './post'
import Suggetion from './suggetion.jsx'
import CreatePost from './createPost'
import Login from '../auth/login'

const Main = () => {
  return (
    <>
      <div className='hidden'>
        <CreatePost />
      </div>
      <div className='block'>
        <div className='flex grid-rows-2 w-full pt-0'>
          <div className='flex flex-col justify-center pt-10 ml-8 w-8/12'>
            <div>

              <Post
                imageurl={"https://static.toiimg.com/photo/102764798.cms"}
                name={"Ashutosh Paliwal"}
                username={"ashutosh_paliwal001"}
                caption={"Hello world"}
                likes={"1234456"}
                profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}

              />
            </div>
            <div>

              <Post
                imageurl={"https://static.toiimg.com/photo/102764798.cms"}
                name={"Ashutosh Paliwal"}
                username={"ashutosh_paliwal001"}
                caption={"Hello world"}
                likes={"1234456"}
                profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}

              />
            </div>
            <div>

              <Post
                imageurl={"https://static.toiimg.com/photo/102764798.cms"}
                name={"Ashutosh Paliwal"}
                username={"ashutosh_paliwal001"}
                caption={"Hello world"}
                likes={"1234456"}
                profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}

              />
            </div>
            <div>

              <Post
                imageurl={"https://static.toiimg.com/photo/102764798.cms"}
                name={"Ashutosh Paliwal"}
                username={"ashutosh_paliwal001"}
                caption={"Hello world"}
                likes={"1234456"}
                profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}

              />
            </div>
            <div>

              <Post
                imageurl={"https://static.toiimg.com/photo/102764798.cms"}
                name={"Ashutosh Paliwal"}
                username={"ashutosh_paliwal001"}
                caption={"Hello world"}
                likes={"1234456"}
                profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}

              />
            </div>
            <div>

              <Post
                imageurl={"https://static.toiimg.com/photo/102764798.cms"}
                name={"Ashutosh Paliwal"}
                username={"ashutosh_paliwal001"}
                caption={"Hello world"}
                likes={"1234456"}
                profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}

              />
            </div>
            <div>

              <Post
                imageurl={"https://static.toiimg.com/photo/102764798.cms"}
                name={"Ashutosh Paliwal"}
                username={"ashutosh_paliwal001"}
                caption={"Hello world"}
                likes={"1234456"}
                profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}

              />
            </div>
            <div>

              <Post
                imageurl={"https://static.toiimg.com/photo/102764798.cms"}
                name={"Ashutosh Paliwal"}
                username={"ashutosh_paliwal001"}
                caption={"Hello world"}
                likes={"1234456"}
                profileurl={"https://freephotocourse.com/uploads/3/4/0/2/34026443/7776791.jpg?446"}

              />
            </div>

          </div>
          <div className='w-4/12 max-h-screen border-l border-gray-300'>
            <Suggetion />
          </div>
        </div>
      </div>

    </>
  )
}


export default Main