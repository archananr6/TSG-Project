import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { ProductlistComponent } from './productlist.component';
import { ProductRoutingModule } from './productlist-routing.module';


@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,ProductRoutingModule],
  declarations: [ProductlistComponent],
})

export class ProductlistModule { }
