import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent implements OnInit {
  @Input() Users: User[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
