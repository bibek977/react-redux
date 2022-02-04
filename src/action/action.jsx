export const addItem=(data)=>{
    return{
        type : "addItem",
        payload :{
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const deleteItem = (id)=>{
    return {
        type : "deleteItem",
        id
    }
}

export const deleteAll = ()=>{
    return{
        type : 'deleteAll'
    }
}