import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../User';
import { Location } from '@angular/common';
import { UsersService } from '../../users.service';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user: User | undefined;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.parent?.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id) {
        this.usersService.getUser(id)
          .subscribe((user: User) => {
            this.user = user;
          });
      }
    });
  }

      
  goBack() {
    this.location.back();
  }
  // save() {
  //   console.log("save: ", this.user)
  //   if (this.user) {
  //     this.usersService.updateUser(this.user)
  //       .subscribe(() => this.goBack());

  //   }
  // }
}
