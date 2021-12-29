import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserComponent } from './user.component';
import { UserordersComponent } from './userorders/userorders.component';
import { UsereditComponent } from './useredit/useredit.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'orders', component: UserordersComponent },
      { path: 'details', component: UserdetailComponent },
      { path: 'edit', component: UsereditComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
  static components = [UserComponent, UserordersComponent, UserdetailComponent, UsereditComponent];
}

