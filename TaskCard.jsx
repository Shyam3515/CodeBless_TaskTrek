import React from "react";
import Tag from "./Tag";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({title,tags, handleDelete,index}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_tags">
          {/* <Tag tagName="HTML" />
          <Tag tagName="CSS" /> */}
          {
            tags.map((tag,index) =>(
              <Tag tagName={tag} key={index} selected={true}/>
            ))
          }
        </div>
        <div className="task_delete" onClick={()=>handleDelete(index)}>
          <img src={deleteIcon} alt="delete_icon" className="delete_icon" />
        </div>
      </div>

    </article>
  );
};

export default TaskCard;
