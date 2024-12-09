import { createContext , useContext } from "react"

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo Msg", 
            completed:false
        }
    ],
    addTodo: (todo) => {},            // these function can define in the app.js , it's not specific to define these functions in app.js , you can define
    updateTodo: (id , todo) => {},  
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
   return  useContext(TodoContext)
 } // this is a hook for using the values present in TodoContext hook

export const TodoProvider = TodoContext.Provider