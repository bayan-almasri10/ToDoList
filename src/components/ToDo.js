import React from "react" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export const ToDo = ({task, toggleComplete ,deleteTodo ,editTodo}) => {
    
    return (
        <div className="todo flex mx-auto justify-between w-full p-4 m-3 bg-green-950 text-white rounded-md" dir="rlt">
            <div>
                <FontAwesomeIcon icon={faPenToSquare}  className={"mr-3 cursor-pointer"} onClick={()=> editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} className={" cursor-pointer"} onClick={()=> deleteTodo(task.id) } />
            </div>
            <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? "completed" : ""} w-2/3 text-right cursor-pointer`} style={{textDecoration: task.completed ? "line-through" : ""}}
            > {task.task} </p>
        </div>
    )
    
}