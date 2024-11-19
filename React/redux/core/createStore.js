// save and track collection of state in hole app
import { bindActionCreators, createStore } from "redux";
function todoReducer(state, action) {
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

// const response = createStore(todoReducer, [])
// console.log(response)
const { dispatch, subscribe, getState, replaceReducer } = createStore(todoReducer, [])
// dispatch({ type: 'add_todo', payload: { todoText: 'todo 1' } })
// dispatch({ type: 'add_todo', payload: { todoText: 'todo 2' } })
// dispatch({ type: 'add_todo', payload: { todoText: 'todo 3' } })
// console.log(getState())

// dispatch({ type: 'delete_todo', payload: { todoId: 2 } })
// console.log(getState())

// or without check console every time used subscribe

// subscribe(()=>console.log(getState()))

// dispatch({ type: 'add_todo', payload: { todoText: 'todo 7' } })
// dispatch({ type: 'add_todo', payload: { todoText: 'todo 8' } })
// dispatch({ type: 'add_todo', payload: { todoText: 'todo 9' } })

// not define every where for add todo so i create a function
const addTodo = (todoText) => ({ type: 'add_todo', payload: { todoText } })
// subscribe(() => console.log(getState()))
// dispatch(addTodo('todo 1'))
// dispatch(addTodo('todo 2'))

const deleteTodo = (id) => ({ type: 'delete_todo', payload: { todoId: id } })
// subscribe(() => console.log(getState()))
// dispatch(deleteTodo(1))

// no need to call dispatch every time
const actions = bindActionCreators({ addTodo, deleteTodo }, dispatch)
actions.addTodo('todo 10')