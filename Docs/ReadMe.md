# Domótica Light - Control de Iluminación Neon

## Contexto e Implementación
Este proyecto es una simulación visual de un sistema domótico simple. Su objetivo es proporcionar una interfaz amigable y moderna (estilo Claymorphism) para controlar una bombilla virtual. La implementación se basa en tecnologías web estándar (HTML, CSS, JS) enfocadas en la eficiencia, la limpieza del código y la experiencia de usuario en dispositivos móviles.

La aplicación permite al usuario interactuar con dos controles físicos simulados (botones con profundidad) que alteran el estado visual de un elemento central (la bombilla), aplicando efectos de iluminación CSS avanzados (box-shadow neón).
**Actualización (v1.1):** Se ha mejorado la representación visual de la bombilla para tener una forma más realista (tipo pera) y una base con textura de rosca, manteniendo el estilo claymorfico.
**Actualización (v1.2):** Se añadió el **Modo Noche/Día**. Ahora el usuario puede alternar entre un tema claro y oscuro mediante un botón en la interfaz. La preferencia se guarda automáticamente.
**Actualización (v1.3):** Se implementó el **Regulador de Intensidad (Dimmer)**. Un slider permite ajustar el brillo de la luz cuando está encendida.
**Actualización (v1.4):** Se añadió el **Selector de Color Dinámico**. Ahora el usuario puede elegir cualquier color de la paleta y la bombilla y su resplandor neón se adaptarán instantáneamente.

## Regla de Mantenimiento de Documentación
> **REGLA CRÍTICA:** Cada vez que se realice un cambio en el código fuente (`.js`, `.css`, `.html`) que altere la funcionalidad o la apariencia visual, este archivo `ReadMe.md` y la `Guía de Usuario` deben ser actualizados inmediatamente en el mismo commit. No se permite código nuevo sin su respectiva actualización documental.

## Futuras Mejoras
1.  **[COMPLETADO] Regulador de Intensidad (Dimmer):** Agregar un slider para controlar la opacidad/brillo de la luz.
2.  **[COMPLETADO] Selector de Color:** Permitir al usuario cambiar del color "Verde Neón" a otros colores personalizados.
3.  **Persistencia de Estado:** Guardar el estado (encendido/apagado) en `localStorage` para que se mantenga al recargar la página.
4.  **Temporizador:** Programar el apagado automático después de X minutos.
4.  **Temporizador:** Programar el apagado automático después de X minutos.

## Instalación y Uso
Ver archivo `Guia_Usuario_Paso_a_Paso.md` en la carpeta `Docs`.
