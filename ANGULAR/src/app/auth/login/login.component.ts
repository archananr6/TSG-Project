import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AuthenticationService } from '../authentication.service';
import { CredentialsService } from '@app/auth';

const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // version: string | null = environment.version;
  errorObj!: boolean | false;
  // loginForm!: FormGroup;
  // isLoading = false;
  loginError: boolean = false;
  isLoading: boolean = false;
  loginForm!: FormGroup;
  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private _formBuilder :FormBuilder,
    private _credentialService :CredentialsService,

  ) {
    this.createForm();
  }

  ngOnInit() {

  }
  login(){
  try {
    if 
    (this.loginForm.valid) { this.isLoading = true;
    console.log('this.loginForm.valid', this.loginForm.value);
    this.authenticationService.login(this.loginForm.value).subscribe(
      (response) => { this.isLoading = false;
      console.log('response', response);
      this._credentialService.setCredentials(response)
      this._router.navigate(['/home']);
    },
    (error) => {
      this.isLoading = false;
      this.errorObj = true
      log.error('login() funtion ', error);
    } );
  }
} 
catch (error) {
  log.error('login() funtion ', error);
}
 };
  private createForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }
}
