import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  onSubmit() {
    // Lógica de envio do formulário, como chamar um serviço de API
    console.log('Formulário enviado!');
  }
}
