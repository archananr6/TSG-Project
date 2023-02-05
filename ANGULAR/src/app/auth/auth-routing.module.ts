import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '@app/auth/registration/registration.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [{ path: 'login', component: LoginComponent, data: { title: marker('Login') } },
{ path: 'register', component: RegistrationComponent, data: { title: marker('Home') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
