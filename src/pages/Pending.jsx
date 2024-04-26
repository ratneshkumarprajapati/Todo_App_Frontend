// import React from 'react'
import TodoCard from "../components/common/TodoCard";
import { AppContext } from "../context/appContext";
import { useContext } from "react";

const Completed = () => {
  const {todos} =useContext(AppContext)

  return (
    <div className="w-full h-screen flex flex-col items-center">
    <main className="w-11/12 my-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
            todos&&todos.map((todo,index)=>(
             todo.completed===false?

                <TodoCard  key={index} todo={todo}></TodoCard>:""
            ))
        }

    </main>
  
</div>
  )
}

export default Completed
