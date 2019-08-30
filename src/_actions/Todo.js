import axios from 'axios'
import Constanta from '../res/Constant'

export const getTodo = () => {
  return {
    type:'GET_TODO',
    //Payload Axios 
    payload : 'Tes'
  }
}