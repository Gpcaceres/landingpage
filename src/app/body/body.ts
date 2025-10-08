import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.html',
  styleUrls: ['./body.css'] 
})
export class Body {
  // Emite un evento cuando el botón "Contáctanos" es presionado
  @Output() openContact = new EventEmitter<void>();

  // Método que se llama al hacer clic en el botón "Contáctanos"
  onContactClick() {
    this.openContact.emit();
  }
}
