import { faCircleUser, faHeart, faHome, faMessage, faSearch, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    return <>

        <div className="fixed border max-w-fit h-screen pt-10 p-1 left-0">
            <div className="cursor-pointer text-center max-w-full max-h-20 text-2xl rounded-lg mb-10 p-2 font-extrabold">
                <p className="">Logo</p>
            </div>
            <div className="flex flex-row h-fit w-full">
                <ul className="w-full p-2 font-bold">
                    <li className="flex items-center p-4 max-w-full rounded-lg m-1 hover:bg-slate-300 cursor-pointer">
                        <div className="w-6 h-6 m-2 ">
                            <FontAwesomeIcon icon={faHome} className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                            <h2>Home</h2>
                        </div>
                    </li>
                    <li className="flex items-center p-4 max-w-full rounded-lg m-1 hover:bg-slate-300 cursor-pointer">
                        <div className="w-6 h-6 m-2 ">
                            <FontAwesomeIcon icon={faSearch} className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                            <h2>Search</h2>
                        </div>
                    </li>
                    <li className="flex items-center p-4 max-w-full rounded-lg m-1 hover:bg-slate-300 cursor-pointer">
                        <div className="w-6 h-6 m-2 ">
                            <FontAwesomeIcon icon={faMessage} className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                            <h2>Message</h2>
                        </div>
                    </li>
                    <li className="flex items-center p-4 max-w-full rounded-lg m-1 hover:bg-slate-300 cursor-pointer">
                        <div className="w-6 h-6 m-2 ">
                            <FontAwesomeIcon icon={faHeart} className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                            <h2>Notification</h2>
                        </div>
                    </li>
                    <li className="flex items-center p-4 max-w-full rounded-lg m-1 hover:bg-slate-300 cursor-pointer">
                        <div className="w-6 h-6 m-2 ">
                            <FontAwesomeIcon icon={faCircleUser} className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                            <h2>Profile</h2>
                        </div>
                    </li>
                    <li className="flex items-center p-4 max-w-full rounded-lg m-1 hover:bg-slate-300 cursor-pointer">
                        <div className="w-6 h-6 m-2 ">
                            <FontAwesomeIcon icon={faSquarePlus} className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                            <h2>Post</h2>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
        {/*<!-- Navigation Bar End -->*/}

    </>
}

export default NavBar;