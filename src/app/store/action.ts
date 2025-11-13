import { createAction, props } from '@ngrx/store';
import { User } from './model';

export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);

export const searchUsers = createAction(
  '[User] Search Users', 
  props<{ query: string }>()
);

export const changePage = createAction(
  '[User] change page',
  props<{page:number}>()
)