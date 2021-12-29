import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import { Location } from '@angular/common';
import { User } from 'src/app/User';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
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
  save() {
    console.log("save: ", this.user)
    if (this.user) {
      this.usersService.updateUser(this.user)
        .subscribe(() => this.goBack());

    }
  }
}
