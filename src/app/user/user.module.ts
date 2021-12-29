import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  imports: [FormsModule, CommonModule, UserRoutingModule, ],
  declarations: [UserRoutingModule.components]
})
export class UserModule { }
