'use client';

import api from "@/app/api";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment, faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";


const MainPost = () => {

    const [data, setData] = useState(api);

    console.log(data);



    return <>
        {/*<!-- Story Section  -->*/}
        <div className="flex max-w-auto h-fit  items-center pt-3  overflow-y-auto">
            {/*<!-- Strory 1 -->*/}
            <div className="ml-3">
                <div className="w-16 h-16 rounded-full bg-yellow-950">
                    <img className="w-full h-full object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUHq2VT5JIlDCZJvahfzzAdY76morgHan4A&s" alt="" />
                </div>
                <label>userName</label>
            </div>

        </div>
        {/*<!-- Story Section End -->*/}

        {
            data.map((ele) => {
                return (<>

                    {/*<!-- Post Section Start -->*/}
                    <div className="m-3 w-auto">
                        {/*<!-- ProfileSection -->*/}
                        <div className="w-fit h-fit flex items-center">
                            <div className="w-10 h-10  float-start m-2 rounded-full">
                                <img className="w-full h-full object-cover rounded-full" src={ele.profileUrl} alt="" />
                            </div>
                            <span className=" inline-block m-3">{ele.username}</span>
                        </div><hr />

                        {/*<!-- image section -->*/}
                        <div className="text-center border  max-w-200 flex justify-center">
                            <img src={ele.imgUrl
                            } width="80%" />
                        </div>
                        {/*<!-- <like comment etc secton -->*/}
                        <div className="flex justify-between">
                            <div className="flex">
                                <div className=" m-3 w-6 h-6 rounded-full">
                                    <FontAwesomeIcon icon={faHeart} className="w-full h-full object-cover rounded-full "/>
                                </div>
                                <div className=" m-3 w-6 h-6 rounded-full">
                                    <FontAwesomeIcon icon={faComment} className="w-full h-full object-cover rounded-full"/>
                                </div>
                                <div className=" m-3 w-6 h-6 rounded-full">
                                    <FontAwesomeIcon icon={faPaperPlane} className="w-full h-full object-cover rounded-full"/>
                                </div>

                            </div>
                            <div>

                                <div className="m-3 w-6 h-6 rounded-full">
                                    <FontAwesomeIcon icon={faBookmark} style={{ color : 'lightGray', cursor: "pointer"}} className="w-full h-full object-cover rounded-full "/>
                                </div>
                            </div>
                        </div>
                        {/*<!-- <caption section -->*/}
                        <div>
                            <p>{ele.likes} Like</p>
                            <h4>{ele.caption}</h4>
                            <input type="text" placeholder="Comment...." />

                        </div>
                        {/*<!-- Post End -->*/}

                    </div>
                </>)
            })
        }

    </>
}

export default MainPost;