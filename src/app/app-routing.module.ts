import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { LoginComponent } from './login/login.component';
import { UsereditComponent } from './user/useredit/useredit.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  // { path: 'detail/:id', component: UserdetailComponent },
  { path: 'user/:id', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'login', component: LoginComponent }
  // { path: 'details', component: UserdetailComponent },
  // { path: 'edit', component: UsereditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
