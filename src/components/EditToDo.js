import React,{useState}from "react" 
export const EditDoForm = ({editTodo , task}) => {
    const [value, setValue] = useState(task.task)
    
    function handleInputTask(e) {
        setValue(e.target.value)
    }

       
    function handleSubmit(e) {
        e.preventDefault()
        editTodo(value, task.id)
        setValue("")
    }

    return (
        <form className="todo-form h-max mx-auto flex justify-center" onSubmit={handleSubmit}>
            <button type="submit" className="todo-btn bg-green-600 text-white p-2 h-14 my-5 rounded-l-md"> تعديل </button>
            <input type="text"
                dir="rtl"
                className="todo-item w-2/3 h-14 rounded-r-md my-5 outline-none"
                placeholder=" عدل على المهمة "
                value={value}
                onChange={handleInputTask}/>
        </form>
    )
    
}