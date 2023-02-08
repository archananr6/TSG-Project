import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
