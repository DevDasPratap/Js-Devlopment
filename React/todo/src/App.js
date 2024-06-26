import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import Counter from "./components/Counter";
import './style.css'

const App = ()=>{
  return (
    <div className="todo-container">
      <Counter/>
      <Header title="Todo"/>
      {/* <TodoItem text="Eat"/> */} 
      <TodoItem text="Learn"/>
      <TodoItem completed="true" text="Eat"/>
      <Button/>
    </div>
  )
}

export default App