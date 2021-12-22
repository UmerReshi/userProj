import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../User';
import { Location } from '@angular/common';


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
    this.getUser();
  }

  getUser() {
    const userId = this.route.snapshot.params["id"];
    this.usersService.getUser(userId)
      .subscribe(user => this.user = user);
    console.log('heyyyyyyyy : ', userId);

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
