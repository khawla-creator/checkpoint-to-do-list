import ADD_ITEMS from '../actionTypes/types'
const initialState=[ 
  {todo: 'buy a new phone' , id : Math.random()},
  {todo: 'resume my corse ' , id : Math.random()},
];

const TodoReducer = (state=initialState, action) => {
switch (action.type) {
  case ADD_ITEMS: return state.concat(action.payload)
    

  default: return state
}

}
export default TodoReducer;
