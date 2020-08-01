export enum types {
  ADD_POST = '[Post] Add',
  REMOVE_POST = '[Post] Remove'
}

export class AddPost {
  readonly type = types.ADD_POST;

  constructor(public payload) { }
}

export class RemovePost {
  readonly type = types.REMOVE_POST;

  constructor(public payload) { }
}