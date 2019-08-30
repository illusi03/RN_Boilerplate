import axios from 'axios'
import Constanta from '../res/Constant'

export const getUser = () => {
  return {
    type:'GET_USER',
    //Payload Axios 
    payload : axios.get(`${Constanta.host}/users`)
  }
}