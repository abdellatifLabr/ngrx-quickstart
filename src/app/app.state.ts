import { PostState } from './post/post.state';

export interface AppState {
  todos: any[];
  post: PostState;
}