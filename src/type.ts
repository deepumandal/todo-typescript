export interface TodoTask {
    id: number,
    context: string,
    isdone: boolean
}
export type Todos = TodoTask[];


export interface initialStatetype {
    isloading: boolean,
    iserror: boolean,
    todoList: Todos | []
}


// export const ActionTypes: string = LOADING | ERROR | COMPLETED | UPDATE | DELETE

export enum ActionTypes {
    LOADING = "loading",
    ERROR = "error",
    COMPLETED = "completed",
    UPDATE = "update",
    DELETE = "delete",
}
export type payloadType =  {
    id: number,
    context: string
} 



export interface ActionType {
    payload: payloadType,
    type: ActionTypes
}