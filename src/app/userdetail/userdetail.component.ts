import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { urlUser } from '../urlUser';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const userId = this.route.snapshot.params["id"];
    this.usersService.getUser(userId)
      .subscribe(user => this.user = user);
    console.log('heyyyyyyyy : ', userId);

  }
}
