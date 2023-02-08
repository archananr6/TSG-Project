import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { AdminproductComponent } from './adminproduct.component';
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'adminproduct', component: AdminproductComponent,data: { title: marker('AdminProduct') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminproductRoutingModule {}
