import changeNumber from './Updown'
import mulDiv from './mulDiv'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    changeNumber,
    mulDiv
})

export default reducer

