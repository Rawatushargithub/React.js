import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/todoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  
  const [todos , setTodos] = useState([]) // this is a state where we all the todos list is their

  const addTodo = (todo) => {
      // setTodos(todo) <= this can't be done becoz it will remove the all previous state value of todos , which we don't want
      // setTodos((prev) => [todo , ...prev]) // this prev will give the old array, and from old array we made a new array , in which previous value get spread and we can add the new todo
      // but we can't do like the above becoz "todo" is a object 
      setTodos((prev) => [{id:Date.now() , ...todo} , ...prev]) // the spreadin todo itself an object which is passed in the addTodo section
  }

  const updateTodo = (id , todo) => {
      setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo ))) //() => () <= this is a auto return syntax of a function 
  }

  const deleteTodo =(id) => {
    // we have the old array and we want to make a new array in which their is no todo of the id (id is that "id" which is passed in the deleteTodo function)
    // filter work on true statement 
    setTodos((prev) => prev.filter((todo) => todo.id !== id))  // filter will go to every value of todos which we called as "todo" in the filter function
  }
 
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }

  // in local storage the value is stored in string format , so while accessing the values from local stroage we have to convert it into json format 
  // and alos while storing the value we have to stored into string format

  useEffect(() => {   // when refreshing the page this function will run , or we can say when the new component will load useEffect function will run 
    // while setting the values in local storage we have to pass the keys and values 
    const todos = JSON.parse(localStorage.getItem("todos")) // parse will parse the string present in localstorage into JSON , "todos" is the key , 
    if(todos && todos.length > 0) {                             // JSON doesn't means curely braces , it also means arrays , more explore on it 
      setTodos(todos)
    }
  } , [])

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  } , [todos])  // <= here this "todos" is 



  return (
    <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */} {/**here we do a loop todos.item , every item is a todo  */} 
            { todos.map((todo) => (
              <div key={todo.id}
              className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
        </div>
    </div>
</div>
</TodoProvider>
  )
}

export default App
