import React from 'react';
import {incNumber,decNumber,mulNumber,divNumber} from './action/Index'
import { useSelector,useDispatch } from 'react-redux';

export default function App() {

  const seletor = useSelector((myFunc)=>myFunc.changeNumber)
  const mulseletor = useSelector((myFunc2)=>myFunc2.mulDiv)
  const dispatch = useDispatch()
  const container = {
    width : '100%',
    height : '70vh',
    display : 'flex',
    alignItems : 'center',
    justifyContent :'center',
    flexDirection : 'column'
  }
  return (
    <>
    <div className='redux' style={container}>
      <h1>Increment and Decrement</h1>
  <div className="inc" style={{display : 'flex', flexDirection : 'row'}}>
    <button onClick={()=>dispatch(decNumber())}>-</button>
    <input type="text" value ={seletor}/>
    <button onClick={()=>dispatch(incNumber(2))}>+</button>
  </div>
    </div>
    <div className='redux' style={container}>
      <h1>Multiplication and Division</h1>
  <div className="inc" style={{display : 'flex', flexDirection : 'row'}}>
    <button onClick={()=>dispatch(mulNumber())}>*</button>
    <input type="text" value ={mulseletor}/>
    <button onClick={()=>dispatch(divNumber())}>/</button>
  </div>
    </div>
    </>
  )
}
