// save and track collection of state in hole app
import { bindActionCreators, combineReducers, createStore } from "redux";

function todoReducer(state = [], action) {
    if (action.type === 'add_todo') {
        const todoText = action.payload.todoText
        return [
            ...state,
            { text: todoText, isFinished: false, id: (state.length === 0) ? 1 : state[state.length - 1].id + 1 }
        ]
    } else if (action.type === 'delete_todo') {
        const todoId = action.payload.todoId
        return state.filter(t => t.id !== todoId)
    } else if (action.type === 'edit_todo') {
        const todo = action.payload.todo
        const todoText = action.payload.todo
        return state.map(t => {
            if (t.id === todo.id) {
                t.text = todoText
            }
            return t
        })
    }
    return state
}

function userReducer(state = [], action) {
    if (action.type === 'add_user') {
        const username = action.payload.username
        return [
            ...state,
            { text: username, id: (state.length === 0) ? 1 : state[state.length - 1].id + 1 }
        ]
    }
    return state
}

const addTodo = (todoText) => ({ type: 'add_todo', payload: { todoText } })
const deleteTodo = (id) => ({ type: 'delete_todo', payload: { todoId: id } })
const addUser = (name) => ({ type: 'add_user', payload: { username: name } })

const reducer = combineReducers({ todo: todoReducer, user: userReducer })
const { dispatch, subscribe, getState, replaceReducer } = createStore(reducer)
subscribe(() => console.log(getState()))
const actions = bindActionCreators({ addTodo, deleteTodo, addUser }, dispatch)
actions.addTodo('todo 9')
actions.addTodo('todo 10')
actions.addUser('PratapDas')