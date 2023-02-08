import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { request } from 'http';
import { CartService } from './cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(private _cartService:CartService) {}
  cartList:any;
  ngOnInit(): void {
    this._cartService.viewCartItems().subscribe(response=>{
      console.log(response)
      this.cartList=response.data.queryResult
    })
  }
  
}
