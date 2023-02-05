import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AuthenticationService } from '../authentication.service';
import { CredentialsService } from '@app/auth';
const log = new Logger('Login');

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  error: string | undefined;
  registerForm!: FormGroup;
  isLoading = false;
  errorObj:boolean=false;
  errorText:any;
  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private _formBuilder :FormBuilder,
    private _credentialService :CredentialsService,

  ) {
    this.createForm();
  }
  registerUser(){
    if(this.registerForm.valid ){
      alert("Please enter a valid registration");
      this.isLoading = true;
      this.authenticationService.register(this.registerForm.value).subscribe(
        (response) => { 
          this.isLoading = false;
        this._router.navigate(['/login']);
      },
      (error) => {
        this.isLoading = false;
        this.errorObj = true
        this.errorText = error?.error?.message;
        log.error('login() funtion ', error);
      } );
    }else{

    }
  }

  private createForm() {
    this.registerForm = this._formBuilder.group({
      name:['',Validators.required],
      email: ['', Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
      password: ['', Validators.required]

    });
  }
}

