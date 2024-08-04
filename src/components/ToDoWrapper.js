import React, {useState} from "react" 
import { ToDoForm } from "./ToDoForm"
import { ToDo } from "./ToDo"
import { v4 as uuidv4 } from 'uuid';
import { EditDoForm } from "./EditToDo";
uuidv4()

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    const toggleComplete = (id) => {
        setTodos([...todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })])
    }

    const deleteTodo = (id) => {
        setTodos([...todos.filter(todo => todo.id !== id)])
    }

    const editTodo = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isEditing: !todo.isEditing
                    }
                }
                return todo
            }
        ))
    }

    const editTask = (task, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: task,
                        isEditing: !todo.isEditing
                    }
                }
                return todo
            }
        ))
    }
    return (
        <div className="TodoWrapper m-auto bg-green-800 p-5 rounded-lg opacity-90 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <h1 className= {"font-bold text-3xl p-4 text-white"} >قائمتي</h1>
            <ToDoForm addTodo={addTodo} />

            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditDoForm editTodo={editTask} task={todo} />
                ):(
                   <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )
             ))}
        </div>
    )
    
}