import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ProductlistComponent } from '@app/productlist/productlist.component';
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';

const routes: Routes = [
    Shell.childRoutes([
        { path: 'productlist', component: ProductlistComponent, canActivate:[AuthenticationGuard],data: { title: marker('productlist') } }
    ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProductRoutingModule {
    
}
