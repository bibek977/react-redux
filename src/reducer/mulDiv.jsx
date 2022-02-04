const initial = 5

const mulDiv = (state = initial, action)=>{
    switch(action.type){
        case "Multiply" : return state * 5
        case 'Division' : return state / 5
        default : return state
    }
}

export default mulDiv