initialState = {
  dataItem: '',
  isLoading: true
}

export default Order = (state = initialState, action) => {
  switch (action.type) {
    //Untuk Order Master ADD
    case 'ADD_ORDER_PENDING':
      return {
        ...state,
        isLoading: true
      }
      break
    case 'ADD_ORDER_FULFILLED':
      return {
        ...state,
        dataItem: action.payload.data,
        isLoading: false
      }
      break
    case 'ADD_ORDER_REJECTED':
      return {
        ...state,
        dataItem: null,
        isLoading: false
      }
      break

    //Untuk Order Master GET
    case 'GET_ORDER_PENDING':
      return {
        ...state,
        isLoading: false
      }
      break
    case 'GET_ORDER_FULFILLED':
      return {
        ...state,
        dataItem: action.payload.data,
        isLoading: false
      }
      break
    case 'GET_ORDER_REJECTED':
      return {
        ...state,
        isLoading: false
      }
      break

    //Untuk Order Master Edit
    case 'EDIT_ORDER_PENDING':
      return {
        ...state,
        isLoading: true
      }
      break
    case 'EDIT_ORDER_FULFILLED':
      return {
        ...state,
        dataItem: action.payload.data,
        isLoading: false
      }
      break
    case 'EDIT_ORDER_REJECTED':
      return {
        ...state,
        dataItem: null,
        isLoading: false
      }
      break

    default:
      return state
      break
  }
}