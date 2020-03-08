import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const loginRequested = createAction(
  '[Auth] Login Requested',
  props<{ email: string, password: string}>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const registerRequested = createAction(
  '[Auth] Register Requested',
  props<{ email: string, password: string, name: string }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ data: any }>()
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: any }>()
);

export const logout = createAction(
  '[Auth] Logout',
  props<{ email: string, password: string, name: string }>()
);

export const logoutCompleted = createAction(
  '[Auth] Logout Completed',
  props<{ data: any }>()
);
