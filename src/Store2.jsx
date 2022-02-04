import { createStore } from "redux";
import reducer from './reducer/reduce'

const mystore = createStore(reducer)

export default mystore