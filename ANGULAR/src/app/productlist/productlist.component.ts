import { Component, OnInit } from '@angular/core';
import { ProductListService } from './productlist.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
   products:any;
   productLists:any;
   isLoading:boolean=false
   errorObj:boolean = false;
  constructor(
    private _productListService:ProductListService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }


  getProductList() {
    this.isLoading = true;
    this._productListService.getProductList().subscribe(
      (response) => { 
      this.isLoading = false;
      this.productLists = response.data;
      debugger
    },
    (error) => {
      this.isLoading = false;
      this.errorObj = true
      //log.error('login() funtion ', error);
    } );
  }

}
