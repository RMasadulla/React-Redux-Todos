const { GET_TODO_REQUEST, GET_TODO_SUCCESS, GET_TODO_FAILED } = require("../constants/Constants")

const initialsTodoState = {
    todos: [],
    isLoading: false,
    error: null
}

const todosReducerState = (state = initialsTodoState, action) => {
    switch(action.type){
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODO_SUCCESS:
            return {
                isLoading: false,
                todos: action.playload,
                error: null
            }
        case GET_TODO_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.playload
            }
        default:
            return state;
    }
}

export default todosReducerState;