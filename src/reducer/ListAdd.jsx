const initialList = {
    list : []
}

const changeList = (state = initialList,action)=>{
    switch(action.type){
        case "addItem" :
            const {id,data}=action.payload
            if (data.length>2){

                return{
                    ...state,
                    list : [
                        ...state.list,
                        {
                            id : id,
                            data : data
                    }
                ]
                }
            }
            
            case 'deleteItem' : 
            const newlist = state.list.filter((elem)=>elem.id !== action.id)
            return{
                ...state,
               list : newlist
            }

            case 'deleteAll' : 
            return{
                list : []
            }
            default :  return state
    }
}

export default changeList