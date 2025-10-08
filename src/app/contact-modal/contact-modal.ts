import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf si lo usaras dentro del modal

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-modal.html',
  styleUrls: ['./contact-modal.css']
})
export class ContactModal {
  // Emite un evento cuando el modal debe cerrarse
  @Output() closeModal = new EventEmitter<void>();

  // Método para cerrar el modal
  onCloseClick() {
    this.closeModal.emit();
  }
}