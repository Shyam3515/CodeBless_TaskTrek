import React, { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = ({setTasks}) => {
  // we have to add all properties[of use state] as its name attribute from our state object[from input]
  //from our task input we want to store its input value in this task property, so in our input tag we add name attribute
  //Recap
  //* instead of creating multiple useStates we create single state variable which is object and in that object we will add properties name and their default value;
  //now for getting form field name, we will pass name property exact same as this object properties name.
  //after that we will pass one single function for all form fields, onChange event
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: []
  });

  const handleChange = (e) => {
    //we just have to this value inside our state variable related to its property name...
    const { name, value } = e.target;

    setTaskData((prev) => {
      //prev is used to return all previous values
      //replacing the current value of our task data object
      return { ...prev, [name]: value };
    });
  };

  const checkTag = (tagName) => {
    return taskData.tags.some((item) => item === tagName);
  };

  const selectTag = (tagName) => {
    if (taskData.tags.some((item) => item === tagName)) {
      // if tag present removing the tag by filtering[if we click on same tag again]
      const filterTags = taskData.tags.filter((item) => item !== tagName);
      setTaskData((prev) => {
        //prev is used to return all previous values
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tagName] };
      });
    }
  };
  // console.log(taskData.tags);
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("Todo")

  // const handleTaskChange = (e) =>{
  //   setTask(e.target.value)
  // };

  // const handleStatusChange = (e) =>{
  //   setStatus(e.target.value)
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("task data",taskData);

    setTasks(prev =>{
      return [...prev,taskData]
    })

    setTaskData({
      task: "",
      status: "todo",
      tags: []
    })
  };

  return (
    <div>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          {/* linking the value of our task to the input value */}
          <input
            type="text"
            name="task"
            value={taskData.task}
            className="task_input"
            placeholder="Enter your task"
            onChange={handleChange}
            // onChange={(e) => setTask(e.target.value)}
          />

          <div className="task_form_bottom_line">
            <div>
              <Tag
                tagName="HTML"
                selectTag={selectTag}
                selected={checkTag("HTML")}
              />
              <Tag
                tagName="CSS"
                selectTag={selectTag}
                selected={checkTag("CSS")}
              />
              <Tag
                tagName="JavaScript"
                selectTag={selectTag}
                selected={checkTag("JavaScript")}
              />
              <Tag
                tagName="React"
                selectTag={selectTag}
                selected={checkTag("React")}
              />
            </div>

            <div>
              <select
                className="task_status"
                name="status"
                value={taskData.status}
                onChange={handleChange}
              >
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>

              <button type="submit" className="task_submit">
                Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TaskForm;
