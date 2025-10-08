import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  protected readonly logoImage = 'assets/images/Logo_ESPE.png';
  protected readonly logoAlt = 'Logotipo de la Universidad de las Fuerzas Armadas ESPE';
}
