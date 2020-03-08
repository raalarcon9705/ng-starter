import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from './auth.actions';
import { UserService } from '../services/user.service';



@Injectable()
export class AuthEffects {

  loginAction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginRequested),
      concatMap((action) =>
        this.authServ.login(action.email, action.password).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error }))))
      )
    );
  });

  registerAction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.registerRequested),
      concatMap((action) =>
        this.authServ.register(action.email, action.password, action.name).pipe(
          map(data => AuthActions.registerSuccess({ data })),
          catchError(error => of(AuthActions.registerFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private authServ: UserService) {}

}
