const init = 0

const changeNumber = (state = init, action)=>{
    switch (action.type) {
        case "Increment": return state + action.payload    
        case "Decrement": return state -1
        default : return state
    }
}

export default changeNumber