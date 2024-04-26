// import React from 'react'
import PropTypes from 'prop-types';
import { apiconnector } from '../../services/apiConnector';
import { toast } from "react-hot-toast";
import { AppContext } from '../../context/appContext';
import { useContext } from 'react';
const GET_DATA_URL = import.meta.env.VITE_UPDATEDATA_URL;
const VITE_DELETE_TODO_URL = import.meta.env.VITE_DELETE_TODO_URL;

import { MdOutlineDelete } from "react-icons/md";
const TodoCard = ({ todo }) => {
  const { fetchTodoData } = useContext(AppContext)

  const handleClick = async (e) => {
    e.preventDefault()
    console.log(todo._id)
    const response = await apiconnector("PUT", GET_DATA_URL, {
      id: todo._id
    })
   if (response) {
    toast.success("Marked Completed")
    fetchTodoData()
    
   }


  }

  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await apiconnector("DELETE", VITE_DELETE_TODO_URL, {
      id: todo._id
    })
    if (res) {
      toast.success("Todo Deleted successfully");
      fetchTodoData()



    }
    else {
      toast.error("Failed")
    }


  }
  return (
    <div className={`text-richblack-25 w-content min-h-[11rem] ${!todo.completed ? "bg-light" : "bg-dark-gradient shadow-inner  "}  p-4 rounded-md`}>


      <div className='text-richblack-900 flex flex-col gap-3 justify-between w-full  ' >
        <p className='text-2xl font-semibold w-full text-wrap overflow-x-scroll hideScrool cursor-pointer '>{todo.title}</p>
        <p className='text-richblack-800 text-xl overflow-x-scroll hideScrool w-full'>
          {todo.description}
        </p>
        <section className='flex justify-between items-center'>

          <button onClick={handleClick} className='bg-blue-500 text-richblack-5 py-2 px-4 mt-2 rounded-md hover:bg-caribbeangreen-500'>{todo.completed ? "Completed" : "Mark as Complete"}</button>

          <button onClick={handleDelete} className='w-10 flex justify-center items-center aspect-square rounded-full bg-richblack-500'>
            <MdOutlineDelete className='text-2xl text-richblack-50' />

          </button>
        </section>

      </div>


    </div>
  )
}
TodoCard.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired
};



export default TodoCard
