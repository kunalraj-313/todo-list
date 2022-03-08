import React, { useState } from 'react'

function DynamicForms() {

    const [field,setField]=useState([{
        firstName:'',
        lastName:''
    }])

    const handleAddFields=()=>{
        setField([...field,{
            firstName:'',
            lastName:''
        }]);
        console.log(field)
    }

    const handleRemoveFields=(index)=>{
        const values=[...field]
        values.splice(index,1)
        setField(values)
    }

    const handleChange=(index,e)=>{
        const values=[...field]
        values[index][e.target.name]=e.target.value
        setField(values)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("field",field)
    }

  return (
      <>
    <form onSubmit={e=>handleSubmit(e)}>
        {field.map((field,index)=>(
        <div key={index}>
            <label>First Name: </label>
            <input type="text" name='firstName' value={field.firstName} onChange={e=>handleChange(index,e)} />
            <label>First Name: </label>
            <input type="text" name='lastName' value={field.lastName} onChange={e=>handleChange(index,e)}/>
            <button onClick={handleAddFields}>Add</button>
            <button onClick={()=>handleRemoveFields(index)}>Remove</button>
        </div>
        
        ))}
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default DynamicForms