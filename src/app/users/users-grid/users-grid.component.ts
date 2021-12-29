import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {
  @Input() Users: User[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
