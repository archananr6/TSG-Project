import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
;
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,CartRoutingModule],
  declarations: [CartComponent],
})

export class CartModule { }
