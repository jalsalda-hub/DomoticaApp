# Arquitectura del Proyecto Domótica Light

## Visión General
Este proyecto consiste en una aplicación web de página única (SPA) diseñada para simular un sistema de control de iluminación domótica básica. La arquitectura sigue un enfoque de "Cliente-Lado" (Client-Side) puro, utilizando tecnologías web estándar sin necesidad de un servidor backend para su funcionamiento lógico básico.

## Catálogo de Componentes
1.  **Interfaz de Usuario (UI - HTML5):** Estructura semántica que aloja el componente de la bombilla y los controles (botones).
2.  **Estilizado (CSS3):** Implementación del diseño "Claymorphism" (Claymorfismo) y efectos de luz de neón. Maneja la responsividad mediante Media Queries.
3.  **Lógica de Negocio (Vanilla JavaScript):** Controlador de eventos que manipula el DOM para cambiar los estados de la bombilla.

## Diagrama de Flujo de Datos
[Usuario] -> (Click en Botón On/Off) -> [JavaScript Event Listener] -> (Manipulación de Clases CSS) -> [Actualización Visual en el DOM]

## Estructura de Archivos
- `index.html`: Punto de entrada.
- `styles/style.css`: Hojas de estilo.
- `scripts/app.js`: Lógica de comportamiento.
- `Docs/`: Documentación del proyecto.
