import AddNewTodo from "./addnew"
import TodoList from "./todolist"
export default function Page(){
  return <div>
    
    <div className=" bg-red-800">hello there!</div>
        <h1 className= " bg-blue shadow dark:bg-green">Awesome Todo App</h1>
        <AddNewTodo />
       <TodoList />
  </div>
  
  
}
  