// import React from 'react'

import { useState } from "react"
import { navList } from "../../data/navlist"
import {Link,useLocation} from "react-router-dom";

import CreateTodo from "../CreateTodo";
const Navbar = () => {
    const location = useLocation();
    // console.log(location)
    const [createTodo,setCreateTodo]=useState(false);
    // console.log(createTodo)
    const handleClick=(e)=>{
        e.preventDefault();
        setCreateTodo(!createTodo)

    }
    
  return (
    <div className="w-full relative flex  justify-center items-center bg-richblack-900 ">
     
        <ul className="w-11/12 flex justify-center items-center gap-10 text-richblack-25 text-lg py-5 ">
          {
            navList.map((data,index)=>(
                <Link  key={index}  to={data.link}>
                    <li className={`${location.pathname===data.link?"text-blue-100":""} group relative hover:text-blue-100 transition-all duration-200 font-semibold`}>
                        {data.title}
                    <div className={`${location.pathname===data.link?"bg-blue-100 flex":" hidden"} w-full h-1  group-hover:flex absolute -bottom-1 rounded-lg bg-blue-100`}>

                    </div>
                    </li>
                
                </Link>

            ))

        }   
        </ul>

        <button onClick={handleClick} className="p-2 absolute right-7 min-w-[8rem] text-richblack-5 bg-blue-100 rounded-md">
           {createTodo?"Cancel Todo":"Add Todo"}
        </button>

        {
            createTodo&&<CreateTodo setCreateTodo={setCreateTodo}></CreateTodo>
        }
       
      
    </div>
  )
}

export default Navbar
