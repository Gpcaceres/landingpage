import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Body } from './body/body';
import { ContactModal } from './contact-modal/contact-modal';
import { Footer } from './footer/footer';
import { Gallery } from './gallery/gallery';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Body, Gallery, Footer, ContactModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected showContactModal = false;

  protected openContactModal(): void {
    this.showContactModal = true;
  }

  protected closeContactModal(): void {
    this.showContactModal = false;
  }
}
