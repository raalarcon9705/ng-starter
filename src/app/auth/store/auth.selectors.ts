import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { AppState } from 'src/app/reducers';

export const selectAuthState = createFeatureSelector<AppState>(
  fromAuth.authFeatureKey
);

export const getAuthState = (state: AppState) => state.auth;

export const getLoading = createSelector(
  getAuthState,
  auth => auth.loading
);

export const getLoggedIn = createSelector(
  getAuthState,
  auth => auth.loggedIn
);

export const getError = createSelector(
  getAuthState,
  auth => auth.error
);

export const getUser = createSelector(
  getAuthState,
  auth => auth.user
);
