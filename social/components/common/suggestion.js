const Suggestion = () => {
    return (<>
        <div className="fixed right-0 suggetion-cont h-screen border border-gray-200">
            <div className="flex justify-start">
                <div className="w-10 h-10 rounded-full bg-red-800 m-10">
                    <img className="w-full h-full rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUHq2VT5JIlDCZJvahfzzAdY76morgHan4A&s" alt="" />
                </div>
                <div className="flex items-center text-2xl font-bold"><h1>User Name</h1></div>
            </div>
            <div className="flex justify-between p-10 text-center font-extrabold">
                <div>
                    <h1>Follwer</h1>
                    <h3>600</h3>
                </div>
                <div>
                    <h1>Following</h1>
                    <h3>400</h3>
                </div>
                <div>
                    <h1>Post</h1>
                    <h3>5</h3>
                </div>
            </div>
        </div>

    </>)
}

export default Suggestion;