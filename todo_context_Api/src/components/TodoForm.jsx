import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    
    const [todo , setTodo] = useState("") // this todo is for single todo in the webpage
    const { addTodo } = useTodo() // this addTodo will take an object 

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        // addTodo(todo) // this is wrong becoz , in functionality we had defined that se have to passed the object in addTodo 
        addTodo({ todo , completed: false})     //in object  todo can be written as todo:todo
        setTodo("")
    }
    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


