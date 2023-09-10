import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})

export class ProfileComponent implements OnInit {
  profileData: any;
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    console.log('token', token);
    if (typeof token === 'string') {
      console.log('token is a string');
    }
    else {
      console.log('token is not a string');
    }
    // Prepare the HTTP headers with the Authorization token
    const headers = { 'Authorization': `${token}` }
    const requestOptions = { headers: headers };
    // Make a GET request to the profile API
    const apiUrl = 'https://auth-api-production-0927.up.railway.app/profile';
    this.http.get(apiUrl, { headers })
      .subscribe(
        (data: any) => {
          // Successful response, set the profile data
          this.profileData = data;
        },
        (error) => {
          // Handle errors, e.g., token expired or unauthorized
          this.errorMessage = 'Error fetching profile data. Please login again.';
          console.error('Error fetching profile data:', error);
        }
      );
  }
}
