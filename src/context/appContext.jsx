import { createContext, useState} from "react";
import { apiconnector } from "../services/apiConnector";
import PropTypes from 'prop-types';
const GET_DATA_URL = import.meta.env.VITE_GETDATA_URL
export const AppContext=createContext();

export default function AppContextProvider({children}) {
    const [todos,setTodos]=useState([]);
   
    // console.log(todos)
    const [loading ,setLoading]=useState(false);

    //data filling
    async function fetchTodoData() {
        setLoading(true);
        try {
            const res=await apiconnector("GET",GET_DATA_URL);
            setTodos(res.data.todos)
            
        } catch (error) {
            console.log(error)
            
        }
        setLoading(false)
        
    }

    const value={
        todos,
        setTodos,
        loading,
        setLoading,
        fetchTodoData
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
AppContextProvider.propTypes={
    children:PropTypes.node
    
}

//prop types validation