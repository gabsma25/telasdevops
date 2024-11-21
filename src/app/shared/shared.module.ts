import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  standalone: true, // Mark as standalone
  template: `<button [type]="type">{{ text }}</button>`,
  styleUrls: ['./shared-button.component.css'],
})
export class SharedButtonComponent {
  @Input() text!: string;
  @Input() type: 'button' | 'submit' = 'button';
}
