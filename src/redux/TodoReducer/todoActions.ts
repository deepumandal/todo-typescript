import { Dispatch } from "react";
import { ActionTypes, payloadType } from "../../type";

export const addTodo = (payload: payloadType) => (dispatch: Dispatch<{ type: ActionTypes, payload?: payloadType }>) => {
    dispatch({
        type: ActionTypes.LOADING
    })

    dispatch({
        type: ActionTypes.COMPLETED,
        payload: payload
    })
    // dispatch({
    //     type: ActionTypes.ERROR
    // })
}
export const deleteTodoTask = (payload: number) => (dispatch: Dispatch<{
    type: ActionTypes, payload: {
        id: number,
    }
}>) => {
    dispatch({
        type: ActionTypes.DELETE, payload: {
            id: payload
        }
    })
}

interface editPayload {
    id: number,
    context: string
}
export const editvalue = (payload: { id: number, context: string }) => (dispatch: Dispatch<{
    type: ActionTypes, payload: payloadType
}>) => {

    dispatch({ type: ActionTypes.UPDATE, payload: payload })
}