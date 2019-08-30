initialState = {
  dataItem: '',
  isLoading: true
}

export default User = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        ...state,
        dataItem: null,
        isLoading: true
      }
      break
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        dataItem: action.payload.data,
        isLoading: false
      }
      break
    case 'GET_USER_REJECTED':
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