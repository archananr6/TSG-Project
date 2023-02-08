import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { CartComponent} from '@app/cart/cart.component';

const routes: Routes = [
    Shell.childRoutes([
        { path: 'cart', component: CartComponent, data: { title: marker('cart') } }
    ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CartRoutingModule {
    
}
