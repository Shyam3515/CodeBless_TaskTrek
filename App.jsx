// This app.jsx is the main entry point for the applications component hierarchy
import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png";
import Done from "./assets/check-mark-button.png";

//accessing the local storage Item
const oldTasks = localStorage.getItem("tasks");

const App = () => {
  //if our tasks is null it takes the empty array
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  console.log("tasks", tasks);

  //this function execute when something change in this whole component
  //first argument is what to run and second argument is when to run
  //if there is any change in tasks array this starts to execute
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])
  

  //Here we are filtering based on the index, if passed index is matched with the current index remove it from the tasks
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <h1 className="todo-title">Todo App</h1>
      {/* passing setTask function as props */}
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="Todo" icon={Todo} tasks={tasks} handleDelete={handleDelete}/>
        <TaskColumn title="Doing" icon={Doing} tasks={tasks} handleDelete={handleDelete}/>
        <TaskColumn title="Done" icon={Done} tasks={tasks} handleDelete={handleDelete}/>
      </main>
    </div>
  );
};

export default App;
