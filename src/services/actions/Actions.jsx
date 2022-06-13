const { default: axios } = require("axios")
const { GET_TODO_SUCCESS, GET_TODO_FAILED, GET_TODO_REQUEST } = require("../constants/Constants")

const getTodosAction = () => async (dispatch) =>{
  dispatch({type: GET_TODO_REQUEST})
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({type:GET_TODO_SUCCESS, playload: res.data})
  } catch (error) {
    dispatch({type: GET_TODO_FAILED, playload: error.message})
  }
}

export default getTodosAction;