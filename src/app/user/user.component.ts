import { Component, OnInit } from '@angular/core';
import { urlUser } from '../urlUser';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  urlUsers: urlUser[] = [];


  constructor(private usersService: UsersService) { }

  // ngOnInit(): void {
  //   this.getUsers();
  // }

  // getUsers(): void {
  //   this.usersService.getUsers()
  //   .subscribe(url => this.urlUsers);
  // }

  ngOnInit() {
    this.usersService.getUsers().subscribe((urlUsers: any) => {
      this.urlUsers = urlUsers;
    });
  }

  clickFunction(urlUser: any) {
    console.log('clickFunction', urlUser);
  }
}


// {
//   this.usersService.getUsers().subscribe((res) => console.log(res));
//   };