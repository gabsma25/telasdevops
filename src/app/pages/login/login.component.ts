import { Component } from '@angular/core';
import { SharedButtonComponent } from '../../shared/shared-button/shared-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedButtonComponent], // Import the standalone button
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {}
