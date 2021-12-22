import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable()
export class UsersService {
  url = 'http://localhost:3000/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    console.log('service works');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    console.log('umeeee: ', url);
    return this.http.get<User>(url);
  }

  deleteUser(id: number): Observable<User> {
    console.log('before deleteUser', id);
    const url = `${this.url}/${id}`;
    console.log('url for deleteUser', url);
    return this.http.delete<User>(url)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  updateUser(user: User) {
    console.log('updateUser ', user.id)
    const url = `${this.url}/${user.id}`;
    // const url1 = this.url + "/" + user.id;

    console.log('url for updateUser', url);
    console.log(`url for updateUser ${url}`);
    return this.http.put(url, user);
  }
}