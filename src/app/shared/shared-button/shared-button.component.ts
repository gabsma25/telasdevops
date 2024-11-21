import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-button.component.html',
  template: `<button [type]="type">{{ text }}</button>`,
  styleUrls: ['./shared-button.component.css'],
})
export class SharedButtonComponent {
  @Input() text!: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Tipo do botão
  @Input() color: string = 'bg-blue-500'; // Classe de cor padrão
  @Input() hoverColor: string = 'hover:bg-blue-600'; // Classe de cor de hover padrão
}