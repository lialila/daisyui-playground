import { Component, Input } from '@angular/core';

export interface ButtonProps {
  label?: string;
  style?: 'primary' | 'secondary' | 'disabled' | 'outline' | 'link';
  color?: 'primary' | 'secondary' | 'danger' | 'error';
}

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
})
export class Button implements ButtonProps {
  @Input() label: string = '';
  @Input() style?: 'primary' | 'secondary' | 'disabled' | 'outline' | 'link';
  @Input() color?: 'primary' | 'secondary' | 'danger' | 'error';

  getButtonStyle(): string {
    switch (this.style) {
      case 'secondary':
        return 'btn btn-secondary';
      case 'disabled':
        return 'btn btn-disabled';
      case 'outline':
        return 'btn btn-outline';
      case 'link':
        return 'btn btn-link';
      default:
        return 'btn btn-primary';
    }
  }
}