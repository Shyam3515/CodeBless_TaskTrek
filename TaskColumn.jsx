import React from "react";
import TaskCard from "./TaskCard";

import "./TaskColumn.css";

// react use bundler like webpack to bundle all code and assets which we use in application, when we import image file in our component then bundler knows to include the image in the bundle.
const TaskColumn = ({ title, icon, tasks, handleDelete }) => {
  // const {title,icon} = props
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} alt="" className="task_column_icon" /> {title}
      </h2>

      {/* Normal task card adds the card to the every column as this card is inside the column 
        but using this condition it adds the cards to only specific column using the title*/}
      {tasks.map(
        (task, index) =>
          task.status === title.toLowerCase() && (
            <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}/>
          )
      )}
      {/* <TaskCard /> */}
    </section>
  );
};

export default TaskColumn;
