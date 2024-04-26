import { useState,useContext } from "react"
import { apiconnector } from "../services/apiConnector"
import { AppContext } from "../context/appContext";
import PropTypes from "prop-types"
import { RxCross2 } from "react-icons/rx";

import {toast} from "react-hot-toast"

const GET_DATA_URL = import.meta.env.VITE_GETDATA_URL;
const CreateTodo = ({setCreateTodo}) => {
  const {fetchTodoData} =useContext(AppContext)
  let response="";
  
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const changeHandler=(e)=>{
   const value=e.target.value
   setTitle(value)


  }
  const changeHandler2=(e)=>{
   const value=e.target.value
   setDescription(value)


  }
  async function handleRequest(e) {
    e.preventDefault()
     response=await apiconnector("POST",GET_DATA_URL,{
      title,description
    })
    if (response) {
      setCreateTodo(false)
      toast.success("Todo Created Successfully");
      fetchTodoData()
    
    }

    
  }



  return (
    
      <div className="w-[80%] sm:w-[60%] xl:max-w-[35%] h-[55%] flex flex-col justify-start gap-5 pt-16   p-5 fixed top-1/4 shadow-inner 
      shadow-richblack-500 bg-richblack-600 lg:left-[35%] sm:left-1/4">
        <input className="bg-richblack-600 text-richblack-50 text-xl outline-none  my-2 border-b border-blue-100" onChange={changeHandler} type="text" placeholder='title'/> <br />
      <input className="bg-richblack-600 text-xl text-richblack-50 my-2 outline-none border-b border-blue-100" onChange={changeHandler2} type="text" placeholder='description' /> <br />

      <section className="flex  justify-between items-center">

      <button className=" absolute right-5 top-0 text-richblack-100 text-3xl  p-2 mt-3 rounded-full font font-semibold" onClick={()=>setCreateTodo(false)}><RxCross2 /></button> 
      <button className="bg-dark-gradient text-richblack-5 text-xl w-full py-2 px-5 mt-3 rounded-md font font-semibold" onClick={handleRequest}>Add Todo</button> 
      </section>
      </div>

     
    
  ) 
}
CreateTodo.propTypes={
  setCreateTodo:PropTypes.func.isRequired,
  
}


export default CreateTodo
