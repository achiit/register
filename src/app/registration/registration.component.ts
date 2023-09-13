import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  registerUser() {
    // Check if the form is valid
    if (!this.isFormValid()) {
      console.error('Form is not valid. Please fill in all required fields.');
      return;
    }

    // Send a POST request to your API with the user data
    //const apiUrl = 'https://auth-api-production-0927.up.railway.app/register';
    const apiUrl = 'http://localhost:5000/register';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.user)
    })
    .then(response => {
      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
        // Navigate to the profile page
        this.router.navigate(['/login']);
      } else {
        // Registration failed
        console.error('Registration failed');
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  }

  // Function to check if the form is valid
  isFormValid(): boolean {
    return this.user.username.trim() !== '' && this.user.password.trim() !== '';
  }
}
