import { createReducer, on } from '@ngrx/store';
import { User } from './model';
import { loadUsers, loadUsersSuccess, loadUsersFailure,searchUsers, changePage } from './action';

export interface UsersState {
  users: User[];
  filteredUsers: User[]
  loading: boolean;
  error: string | null;

  currentPage: number,
  pageSize:number
}

export const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
  currentPage: 1,
  pageSize: 25
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    filteredUsers: users,
    loading: false,
    error: null,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(searchUsers, (state, { query }) => {
    const lower = query.toLowerCase().trim();
     if (!lower) {
    return { ...state, filteredUsers: state.users };
  }
    const filtered = state.users.filter(u =>
       u.firstName.toLowerCase().includes(lower) ||
        u.lastName.toLowerCase().includes(lower) ||
        u.maidenName.toLowerCase().includes(lower) ||
        u.age.toString().includes(lower) ||
        u.gender.toLowerCase().includes(lower) ||
        u.email.toLowerCase().includes(lower) ||
        u.phone.toLowerCase().includes(lower) ||
        u.username.toLowerCase().includes(lower) ||
        u.password.toLowerCase().includes(lower) ||
        u.birthDate.toLowerCase().includes(lower)
    );
    return { ...state, filteredUsers: filtered };
  }),
  on(changePage,(state ,{page})=>({  
    ...state,
    currentPage:page})

  )
);
