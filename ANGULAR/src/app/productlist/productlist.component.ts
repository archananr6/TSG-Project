import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { ProductListService } from './productlist.service';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { request } from 'http';
import { Router } from '@angular/router';


const log = new Logger('GetProductList');
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
  productLists: any;
  isLoading: boolean = false;
  errorObj: boolean = false;
  constructor(private _productListService: ProductListService,private routes:Router) {}

  ngOnInit(): void {
    this.getProductList();
  }
//getproductList
  getProductList() {
    this.isLoading = true;
    try {
      this._productListService.getProductList().subscribe(
        (response) => {
          this.isLoading = false;
          this.productLists = response.data;
        },
        (error) => {
          this.isLoading = false;
          this.errorObj = true;
          log.error('getProductList() funtion ', error);
        }
      );
    } catch (error) {
      this.isLoading = false;
      log.error('error occured', error);
    }
  }
//addtocart
  addtoCart(product_id: any) {
    this.isLoading = true;
    const requestObj = {
      products_id: product_id,
    };
    this._productListService.addtoCart(requestObj).subscribe(
      (response) => {
        this.isLoading = false;
        this.routes.navigate(['/cart'])
      },
      (error) => {
        this.isLoading = false;
        this.errorObj = true;
        log.error('addtoCart() funtion ', error);

      }
    );
  }
}
