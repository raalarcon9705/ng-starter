import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error$: Observable<any>;
  registerForm: FormGroup;

  constructor(private userServ: UserStateService, private fb: FormBuilder) { }

  buildForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() { return this.registerForm.controls.email; }
  get password() { return this.registerForm.controls.password; }
  get name() { return this.registerForm.controls.name; }

  onRegister() {
    this.userServ.register(this.email.value, this.name.value, this.password.value);
  }

  ngOnInit(): void {
    this.buildForm();
    this.error$ = this.userServ.error$;
  }

}
