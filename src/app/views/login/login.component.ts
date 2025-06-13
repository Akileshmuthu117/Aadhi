import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

   email: string = '';
   password: string = '';

  onSubmit() {
    if (this.email && this.password) {
      console.log('Login successful:', { email: this.email, password: this.password });
      alert('Login successful!');
    } else {
      alert('Please fill in all fields.');
    }
  }

}
