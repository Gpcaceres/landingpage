import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

type Service = {
  title: string;
  summary: string;
  iconClass: string;
  skills: string[];
};

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.html',
  styleUrls: ['./body.css']
})
export class Body {
  @Output() openContact = new EventEmitter<void>();

  protected readonly hero = {
    highlight: 'Bienvenido',
    titleSuffix: 'a mi perfil profesional',
    description:
      'Hola, soy Germán Cáceres, estudiante de Ingeniería de Software en la Universidad de las Fuerzas Armadas ESPE. ' +
      'En esta página encontrarás información sobre mi experiencia, habilidades técnicas y algunos de los proyectos en los que he participado.'
  };

  protected readonly profileImage = 'assets/images/fotoPerfil.jpg';

  protected readonly services: Service[] = [
    {
      title: 'Desarrollo Frontend',
      summary: 'Diseño e implemento interfaces accesibles y optimizadas para diferentes dispositivos.',
      iconClass: 'service-icon--frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'Angular']
    },
    {
      title: 'Desarrollo Backend',
      summary: 'Construyo servicios robustos y escalables con enfoque en buenas prácticas y seguridad.',
      iconClass: 'service-icon--backend',
      skills: ['Node.js', 'Express.js', 'Python', 'REST APIs']
    },
    {
      title: 'Bases de Datos',
      summary: 'Modelado, optimización y mantenimiento de soluciones de datos relacionales y no relacionales.',
      iconClass: 'service-icon--database',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Prisma']
    }
  ];

  protected readonly checkIconPath =
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z';

  protected onContactClick(): void {
    this.openContact.emit();
  }
}
