import React,{useEffect, useState} from 'react'

const getLocalItems=()=>{
    let list =localStorage.getItem('lists')
    console.log(list)
    if(list){
  return  JSON.parse(localStorage.getItem('lists'))

    }else{
        return[]
    }
}

export default function Form() {

const [input,setInput]=useState('')
const [items,setItems]=useState(getLocalItems())


const handleChange=(e)=>{
setInput(e.target.value)
}

let addItem=()=>{
    if(!input){
        
    }else{
        setItems([...items,input])
        setInput('')
    }
}
const deleteItem=(id)=>{
    const updateItems=items.filter((ele,ind)=>{
        return ind !==id
    })
    setItems(updateItems)
}

        useEffect(() => {
    
            localStorage.setItem('lists',JSON.stringify(items))
}, [items])
    return (
<div className="container">
    <h1 className='text-center'>ToDos List</h1>
    <div className="row d-flex justify-content-center">
        <div className='col-6 m-5 text-center'>
            <input className='form-control' type='text' value={input} placeholder='enter your task' onChange={handleChange}/>
            <button className='btn btn-sm btn-success mt-3' onClick={addItem} >Add</button>
            </div>
            <table>
                <thead>
                    <th className='text-center'>Task</th>
                    <th className='text-center'>Action</th>
                    </thead>
                    {
                    items.map((elem,ind)=>{
                        return(
                        <tbody className='text-capitalize text-center' key={ind}>
                            <td>
                                {elem}
                            </td>
                            <td>
                                <button className='btn btn-sm btn-danger' onClick={()=>deleteItem(ind)}>Delete</button>
                            </td>
                            </tbody>
                            )
                        })
                        }
                        </table>
                    </div>
            </div>
        )
}
