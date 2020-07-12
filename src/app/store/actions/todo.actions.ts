export enum types {
  ADD_TODO = '[Todo] Add',
  REMOVE_TODO  = '[Todo] Remove'
}

export class AddTodo {
  readonly type = types.ADD_TODO;

  constructor(public payload) { }
}

export class RemoveTodo {
  readonly type = types.REMOVE_TODO;

  constructor(public payload) { }
}