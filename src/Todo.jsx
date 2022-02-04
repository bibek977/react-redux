import React, { useState } from 'react';
import {addItem,deleteItem,deleteAll} from './action/action'
import { useDispatch, useSelector } from 'react-redux';

export default function Todo() {
  const [inputValue, setinputValue] = useState('');
  const seletor = useSelector((state)=>state.changeList.list)
  const mydispatch = useDispatch()
  return (
    <>
      <div className="todo">
          <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)} />
          <button onClick={()=>mydispatch(addItem(inputValue),setinputValue(''))}>+</button>
      </div>
      <div className="items">
        {seletor.map((e)=>{
          return(
            <div className='item-list' key={e.id}>
            <li>{e.data} <button onClick={()=>mydispatch(deleteItem(e.id))}>-</button></li>
            </div>
          )
        })}
      </div>
      <div>
        <li style={{listStyle : 'none'}} onClick={()=>mydispatch(deleteAll())}><button>delete</button></li>
      </div>
      
    </>

  )
}
