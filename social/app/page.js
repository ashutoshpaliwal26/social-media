import NavBar from "@/components/common/navbar";
import Suggestion from "@/components/common/suggestion";
import MainPost from "@/components/post/main";

const App = () => {
  return (<>
    <div className="flex max-w-full max-h-fit">
      <NavBar/>
      
      <div className="w-44 h-screen"></div>
      <div className="main-div  h-screen mt-4 p-2 items-center m-8">
        
        <MainPost/>

      </div>
      
        <Suggestion/>
    </div>
    <div>

    </div>
  </>)
}

export default App;
