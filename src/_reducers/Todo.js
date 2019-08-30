initialState = {
  dataItem: '',
  isLoading: true
}

export default Todo = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODO_PENDING':
      return {
        ...state,
        dataItem: null,
        isLoading:true
      }
      break
    case 'GET_TODO_FULFILLED':
      return {
        ...state,
        dataItem: action.payload.data,
        isLoading:false
      }
      break
    case 'GET_TODO_REJECTED':
      return {
        ...state,
        dataItem: null,
        isLoading:false
      }
      break
    default:
      return state
      break
  }
}