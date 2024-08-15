import React, { useState } from 'react'

const TodoInput = (props) => {
  const [inputText,setInputText]=useState('');
  const handleEnterPress=(e)=>{
     if(e.keyCode===13){
      props.addList(inputText);
      setInputText("");
     }
  }
  return (
    <div>
       <div className='input-container'>
         <input type="text" className='input-box-todo' placeholder='Enter your Todo' onChange={(e)=>setInputText(e.target.value)} value={inputText} onKeyDown={handleEnterPress}/>
         <button className='add-btn' onClick={()=>{
          props.addList(inputText)
          setInputText("")
         }}>+</button>
         
       </div>
    </div>
  )
}

export default TodoInput
