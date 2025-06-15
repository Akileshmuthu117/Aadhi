import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterLink]
})
export class HomeComponent  implements OnInit {

  menuList : any;

  constructor() { }

  ngOnInit() {
    this.menuList = [
    { title: 'Daily Bundle Details Enter', url: '/dailybundle'},
    { title: 'Login', url: '/login' }
  ];

  }

}
