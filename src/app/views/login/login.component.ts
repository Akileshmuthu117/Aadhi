import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

   email: string = '';
   password: string = '';

  onSubmit() {
    if (this.email && this.password) {
      this.router.navigate(['home']);
    } else {
      alert('Please fill in all fields.');
    }
  }

}
