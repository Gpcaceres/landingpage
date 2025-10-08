# Recomendaciones para la landing page

## Observaciones generales
- El archivo `src/app/app.html` mantiene la plantilla de bienvenida de Angular, con estilos incrustados y comentarios de marcador de posición. Conviene limpiar el archivo y reestructurarlo para reflejar el contenido real del producto o servicio.
- Toda la lógica de estilos se encuentra dentro del propio HTML mediante una etiqueta `<style>`. Esto dificulta el mantenimiento y reutilización de estilos, además de impedir el uso del *build* optimizado de Angular para CSS.

## Accesibilidad y semántica
- Sustituir el contenedor principal `<div class="content">` por etiquetas semánticas (`<header>`, `<section>`, `<footer>`) para mejorar la estructura del documento y la navegación asistida.
- Añadir textos alternativos (`alt`) descriptivos a los elementos gráficos o, si se mantiene el logotipo SVG inline, incluir un `<title>`/`<desc>` dentro del SVG para lectores de pantalla.
- Revisar el contraste de colores definidos en las variables (por ejemplo, `--gray-400` sobre fondo blanco) para garantizar una relación mínima de 4.5:1.

## Organización de estilos
- Trasladar los estilos desde la etiqueta `<style>` a `src/app/app.css` o a hojas modulares. Esto permite aplicar encapsulación de estilos de Angular y aprovechar el autoprefijado durante el *build*.
- Definir un sistema de espaciado tipográfico en variables o utilidades para evitar valores mágicos repetidos (`1.5rem`, `0.73rem`, etc.).
- Considerar la creación de un tema oscuro/claro utilizando las variables CSS ya definidas y alternando valores con clases de nivel raíz.

## Componentización y reutilización
- Dividir la interfaz en componentes pequeños (por ejemplo, `HeroComponent`, `FeatureListComponent`, `SocialLinksComponent`). Esto mejora la legibilidad y facilita la reutilización en otras rutas.
- Exponer los datos del componente (texto, enlaces) desde `app.ts` en lugar de dejarlos estáticos en el HTML. Se puede utilizar `*ngFor` para renderizar colecciones (como las *pills* o enlaces sociales) y mantener el contenido en un arreglo tipado.

## Rendimiento
- El SVG grande incrustado en la plantilla incrementa el tamaño inicial del HTML. Evalúa moverlo a un archivo en `assets/` y referenciarlo con `<img>` o `ngOptimizedImage` para aprovechar la caché del navegador.
- Habilitar estrategias de carga diferida (lazy loading) para rutas futuras y aprovechar `standalone components` propios de Angular 17 para componentes adicionales.

## Próximos pasos sugeridos
1. Limpiar `app.html` eliminando los comentarios de marcador de posición y trasladando los estilos a `app.css`.
2. Diseñar el contenido real de la landing (titulares, CTA, secciones de valor) y estructurarlo con semántica adecuada.
3. Crear modelos/datos en `app.ts` para alimentar la vista y permitir actualizaciones fáciles desde TypeScript.
4. Añadir pruebas básicas en `app.spec.ts` que comprueben la presencia de elementos clave (por ejemplo, el CTA principal) para detectar regresiones de UI.

Estas acciones facilitarán que la landing page evolucione hacia un diseño profesional, accesible y mantenible.
