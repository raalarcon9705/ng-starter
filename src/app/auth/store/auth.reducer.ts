import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from '../models/user';

export const authFeatureKey = 'auth';

export interface State {
  user: User;
  loading: boolean;
  loggedIn: boolean;
  error: null;
}

export const initialState: State = {
  user: null,
  loading: false,
  loggedIn: false,
  error: null
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.loginRequested, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    loggedIn: true,
    error: null
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(AuthActions.registerRequested, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AuthActions.registerSuccess, state => ({
    ...state,
    loading: false,
  })),
  on(AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(AuthActions.logout, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AuthActions.logoutCompleted, state => ({
    ...state,
    user: null,
    loading: false
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
