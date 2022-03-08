import React, { useState } from 'react'

export default function ToDo() {
    const [todo,setTodo]=useState('')
    const [allTodos,setAll]=useState([])

    const addTask=()=>{
        if(todo!==""){
            setAll([{id:`${todo}.${Date.now()}`,todo},...allTodos])
        }
    }
    
    const rmvTask=(id)=>{
        console.log(id)
        const temp=[...allTodos]
        setAll(temp.filter(x=>x.id!==id))
        
    }

    console.log("All",allTodos)
  return (
    <div className='todo'>
        <h1>TO-DO LIST</h1>
       <label htmlFor='task'>Enter Task:</label>
       <input type='text' name='task'onChange={(e)=>setTodo(e.target.value)}></input>
       <button className='addbtn' onClick={addTask}>Add</button>
       {
            allTodos.map((t)=>{
                    return <div key={t.id} className='slot'>{t.todo}
                    <button className='rmvbtn' onClick={()=>rmvTask(t.id)}>-</button>
                    </div>
                })
            
       }
    </div>

  )
}
