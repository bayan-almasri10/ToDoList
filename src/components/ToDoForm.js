import React,{useState}from "react" 
export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    
    function handleInputTask(e) {
        setValue(e.target.value)
    }

       
    function handleSubmit(e) {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }

    return (
        <form className="todo-form h-max mx-auto flex justify-center" onSubmit={handleSubmit}>
            <button type="submit" className="todo-btn bg-green-600 text-white p-2 h-14 my-5 rounded-l-md">أضف مهمة</button>
            <input type="text"
                
                dir="rtl"
                className="todo-item w-2/3 h-14 rounded-r-md my-5 outline-none"
                placeholder=" ماذا لديك اليوم ؟ "
                value={value}
                onChange={handleInputTask}/>
        </form>
    )
    
}