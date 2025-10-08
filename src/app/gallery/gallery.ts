import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Project = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {
  protected readonly projects: Project[] = [
    {
      title: 'Proyecto web moderno',
      description: 'Aplicación responsive creada con Angular y Tailwind CSS.',
      image: 'https://placehold.co/320x200/A78BFA/ffffff?text=Proyecto+Web',
      alt: 'Captura de un proyecto web moderno'
    },
    {
      title: 'Aplicación móvil intuitiva',
      description: 'Diseño y prototipo de experiencia de usuario para iOS y Android.',
      image: 'https://placehold.co/320x200/60A5FA/ffffff?text=App+Movil',
      alt: 'Vista previa de una app móvil intuitiva'
    },
 
    {
      title: 'Dashboard de analíticas',
      description: 'Visualización de métricas clave en tiempo real para equipos de producto.',
      image: 'https://placehold.co/320x200/FB923C/ffffff?text=Analitica',
      alt: 'Panel de analíticas con gráficos y estadísticas'
    },
   {
  title: 'Articulo de Redes',
  description: 'Constructing and Editing Directed Follower Networks from Twitter (X) Reply Threads: An Interactive Visualisation Tool',
  image: 'https://placehold.co/320x200/EF4444/ffffff?text=Artículo',
  alt: 'Representación de una campaña de marketing digital'
  }

  ];
}
