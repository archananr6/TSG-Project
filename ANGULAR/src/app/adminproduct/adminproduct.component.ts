import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialsService } from '@app/auth';


@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.scss']
})
export class AdminproductComponent implements OnInit {
  productlistForm!: FormGroup;
  error: string | undefined;
  isLoading = false;
  errorObj:boolean=false;
  errorText:any;

  constructor(private _router: Router,
    private _activatedRouter: ActivatedRoute,

    private _formBuilder :FormBuilder,
    private _credentialService :CredentialsService,
) {
  this.createForm();
 }

  ngOnInit(): void {
  }


  private createForm() {
    this.productlistForm = this._formBuilder.group({
      product_name:['',Validators.required],
      product_description: ['', Validators.required],
      product_price: ['', Validators.required],
      product_image:['', Validators.required]
      
    });
  }
 
}
