// import React from 'react'

import { useEffect } from "react"
// import { apiconnector } from "../services/apiConnector"
import TodoCard from "../components/common/TodoCard";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
// const GET_DATA_URL = import.meta.env.VITE_GETDATA_URL


const All = () => {
  const {fetchTodoData,todos}=useContext(AppContext)
    // const [todos, setTodos] = useState([])
    // async function handleFecthTodoData() {
    //   const response = await apiconnector("GET", GET_DATA_URL)
    //   console.log(response.data.todos)
    //   const todos=response.data.todos
    //   setTodos(todos)
  
  
    // }
  
    useEffect(()=>{
      fetchTodoData()
    }
     
    ,[])
  return (
    <div className="w-full h-screen flex flex-col items-center">
        <main className="w-11/12 my-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                todos&&todos.map((todo,index)=>(

                    <TodoCard  key={index} todo={todo}></TodoCard>
                ))
            }

        </main>
      
    </div>
  )
}

export default All
