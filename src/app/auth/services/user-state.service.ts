import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { getLoading, getLoggedIn, getError, getUser } from '../store/auth.selectors';
import { loginRequested, registerRequested } from '../store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  loading$: Observable<boolean>;
  loggedIn$: Observable<boolean>;
  error$: Observable<any>;
  user$: Observable<User>;

  constructor(private store: Store<AppState>) {
    this.loading$ = this.store.select(getLoading);
    this.loggedIn$ = this.store.select(getLoggedIn);
    this.error$ = this.store.select(getError);
    this.user$ = this.store.select(getUser);
  }

  login(email: string, password: string) {
    this.store.dispatch(loginRequested({ email, password}));
  }

  register(email: string, name: string, password: string) {
    this.store.dispatch(registerRequested({ email, name, password }));
  }
}
