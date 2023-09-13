import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  loginError = false;

  constructor(private router: Router) {}

  loginUser() {
    // Send a POST request to your login API with the user data
    const apiUrl = 'http://localhost:5000/login';
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.user)
    })
    .then(response => {
      if (response.ok) {
        // Login successful, parse the token and store it in localStorage
        response.json().then(data => {
          localStorage.setItem('token', data.token);
  
          // Redirect to the profile page
          this.router.navigate(['/profile']);
        });
      } else {
        // Login failed, display an error message
        this.loginError = true;
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  }
  
}
