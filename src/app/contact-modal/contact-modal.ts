import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

type ContactLink = {
  label: string;
  value: string;
  href?: string;
};

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-modal.html',
  styleUrls: ['./contact-modal.css']
})
export class ContactModal {
  @Output() closeModal = new EventEmitter<void>();

  protected readonly contactLinks: ContactLink[] = [
    { label: 'Teléfono', value: '+593 99 609 2810', href: 'tel:+593996092810' },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/german-caceres',
      href: 'https://www.linkedin.com/in/german-caceres'
    },
    { label: 'GitHub', value: 'github.com/Gpcaceres', href: 'https://github.com/Gpcaceres' }
  ];

  protected onCloseClick(): void {
    this.closeModal.emit();
  }
}
