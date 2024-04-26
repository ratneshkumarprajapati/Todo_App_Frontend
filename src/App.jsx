
import Navbar from "./components/common/Navbar";
import {Routes,Route} from "react-router-dom"

import All from "./pages/All";
import Completed from "./pages/Completed";
import Pending from "./pages/Pending";



function App() {
 
  return (
    <div className=" w-full flex flex-col items-center bg-Blacklight ">
    <Navbar></Navbar>
    <Routes>
      <Route path="/"  element={<All></All>}></Route>
      <Route path="/completed"  element={<Completed></Completed>}></Route>
      <Route path="/pending"  element={<Pending></Pending>}></Route>
    </Routes>
      
    </div>
  )
}

export default App
