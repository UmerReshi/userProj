import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersCardComponent } from './users-card/users-card.component';
import { UsersGridComponent } from './users-grid/users-grid.component';

@NgModule({
    imports: [CommonModule, UsersRoutingModule],
    declarations: [UsersRoutingModule.components, UsersCardComponent, UsersGridComponent]
})
export class UsersModule { }
