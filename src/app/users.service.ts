import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  urlUsers = 'http://localhost:3000/users';


  constructor(private http: HttpClient) {
    console.log('service works');
  }

  getUsers() {
    return this.http.get(this.urlUsers);
  }

  getUser(id: any) {
    const url = `${this.urlUsers}/${id}`;
    console.log('umeeee: ', url);
    return this.http.get(url);
  }
}
