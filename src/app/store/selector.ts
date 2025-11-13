import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './reducer';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.filteredUsers
);

export const selectLoading = createSelector(
  selectUsersState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUsersState,
  (state) => state.error
);

export const selectCurrentPage = createSelector(
  selectUsersState,
  (state) => state.currentPage
);

export const selectItemsPerPage = createSelector(
  selectUsersState,
  (state) => state.pageSize
);

export const selectPagedUsers = createSelector(
  selectUsers,
  selectCurrentPage,
  selectItemsPerPage,
  (users, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return users.slice(startIndex, endIndex);
  }
);

export const selectTotalPages = createSelector(
  selectUsers,
  selectItemsPerPage,
  (users, pageSize) => Math.ceil(users.length / pageSize)
);
