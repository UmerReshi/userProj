import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Users: User[] = [];

  constructor(private usersService: UsersService) { }

  // ngOnInit(): void {
  //   this.getUsers();
  // }

  // getUsers(): void {
  //   this.usersService.getUsers()
  //   .subscribe(url => this.urlUsers);
  // }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.Users = users;
    });
  }

  clickFunction(User: User) {
    console.log('clickFunction', User);
  }

  delete(User: User) {
    this.usersService.deleteUser(User.id).subscribe(res => {
      this.getAllUsers();
    });
  }

  add(name: string) {
    console.log("name works", name, { name }, { name } as User)
    this.usersService.addUser({ name } as User).subscribe(() => {
      this.getAllUsers();
    });
  }
}


// {
//   this.usersService.getUsers().subscribe((res) => console.log(res));
//   };