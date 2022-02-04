const incNumber = (num)=>{
    return{
        type : "Increment",
        payload : num
    }
}

const decNumber = ()=>{
    return {
        type : 'Decrement'
    }
}

const mulNumber = ()=>{
    return{
        type : "Multiply"
        }
}

const divNumber = ()=>{
    return {
        type : 'Division'
    }
}

export {incNumber,decNumber,mulNumber,divNumber}