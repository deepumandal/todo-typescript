import { ActionType, ActionTypes, TodoTask, Todos, initialStatetype } from "../../type";


export const initialState: initialStatetype = {
    isloading: false,
    iserror: false,
    todoList: []
}

export const todoReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ActionTypes.LOADING: {
            return {
                ...state,
                isloading: true
            }
        }
        case ActionTypes.ERROR: {
            return {
                ...state,
                iserror: true
            }
        }
        case ActionTypes.COMPLETED: {
            return {
                ...state,
                isloading: false,
                iserror: false,
                todoList: [
                    ...state.todoList,
                    {
                        id: state.todoList.length + 1,
                        isdone: false,
                        context: action.payload
                    }
                ]
            }
        }
        case ActionTypes.UPDATE: {
            let targetContext = state.todoList.map((todo) => {
                if (todo.id !== action.payload.id) return todo
                else return {
                    ...todo,
                    context: action.payload.context
                }
            })
            console.log("update", {

                ...state,
                todoList: targetContext
            })
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    ...targetContext]
            }

        }
        case ActionTypes.DELETE: {
            const DeleteTask = state.todoList.filter(todoObject => todoObject.id != action.payload.id)
            return {
                ...state,
                todoList: [
                    ...DeleteTask
                ]
            }
        }


        default: return state
    }
}