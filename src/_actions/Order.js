import axios from 'axios'
import Constanta from '../res/Constant'

export const addOrder = (dataJadi) => {
  return {
    type: 'ADD_ORDER',
    payload: axios({
      url: `${Constanta.host}/order`,
      method: 'POST',
      data: dataJadi,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
export const editOrder = (id,dataJadi) => {
  return {
    type: 'EDIT_ORDER',
    payload: axios({
      url: `${Constanta.host}/order/${id}`,
      method: 'PATCH',
      data: dataJadi,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}