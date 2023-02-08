import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { AdminproductComponent } from './adminproduct.component';
import { AdminproductRoutingModule } from './adminproduct-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,ReactiveFormsModule, AdminproductRoutingModule],
  declarations: [AdminproductComponent],
})
export class AdminproductModule {}
