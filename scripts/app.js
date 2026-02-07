/**
 * @file app.js
 * @description Lógica principal para la aplicación de Domótica Light.
 * Maneja los eventos de interacción del usuario para encender y apagar la bombilla.
 * @version 1.0.0
 * @author GitHub Copilot
 */

/**
 * Referencia al elemento DOM de la bombilla.
 * @type {HTMLElement}
 */
const bulbElement = document.getElementById('bulb');

/**
 * Referencia al botón de encendido.
 * @type {HTMLButtonElement}
 */
const btnOn = document.getElementById('btn-on');

/**
 * Referencia al botón de apagado.
 * @type {HTMLButtonElement}
 */
const btnOff = document.getElementById('btn-off');

/**
 * Referencia al botón de cambio de tema.
 * @type {HTMLButtonElement}
 */
const themeToggleBtn = document.getElementById('theme-toggle');

/**
 * Referencia al slider de intensidad.
 * @type {HTMLInputElement}
 */
const dimmerInput = document.getElementById('dimmer');

/**
 * Referencia al selector de color.
 * @type {HTMLInputElement}
 */
const colorPicker = document.getElementById('color-picker');

/**
 * Enciende la bombilla agregando la clase 'active'.
 * Aplica los efectos visuales de neón definidos en CSS.
 * 
 * @function
 * @returns {void}
 */
function turnOn() {
    if (bulbElement) {
        bulbElement.classList.add('active');
        console.log('La bombilla se ha encendido.');
    }
}

/**
 * Apaga la bombilla removiendo la clase 'active'.
 * Retorna al estado visual de "clay" apagado.
 * 
 * @function
 * @returns {void}
 */
function turnOff() {
    if (bulbElement) {
        bulbElement.classList.remove('active');
        console.log('La bombilla se ha apagado.');
    }
}

/**
 * Alterna entre modo claro (día) y oscuro (noche).
 * Guarda la preferencia en localStorage.
 * 
 * @function
 * @returns {void}
 */
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    // Cambiar icono
    const isDark = document.body.classList.contains('dark-mode');
    themeToggleBtn.innerText = isDark ? '☀️' : '🌙';
    
    // Guardar preferencia
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

/**
 * Carga el tema guardado al iniciar la aplicación.
 */
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if(themeToggleBtn) themeToggleBtn.innerText = '☀️';
    }
}

/**
 * Actualiza la intensidad de la bombilla basada en el slider.
 * Aplica una variable CSS personalizada.
 * 
 * @function
 * @returns {void}
 */
function updateIntensity() {
    if (bulbElement && dimmerInput) {
        // Convertimos el valor (10-100) a decimal (0.1 - 1.0)
        const intensity = dimmerInput.value / 100;
        bulbElement.style.setProperty('--bulb-intensity', intensity);
        console.log(`Intensidad ajustada a: ${intensity}`);
    }
}

/**
 * Actualiza el color de la bombilla.
 * Aplica una variable CSS personalizada.
 * 
 * @function
 * @param {Event} event - El evento de cambio de input color
 * @returns {void}
 */
function updateColor(event) {
    if (bulbElement && event.target) {
        const newColor = event.target.value;
        // Asignamos a la variable root o directamenet al elemento para que sobrescriba
        bulbElement.style.setProperty('--bulb-color', newColor);
        console.log(`Color cambiado a: ${newColor}`);
    }
}

// Cargar tema al inicio
loadTheme();

// Inicialización de Event Listeners
if (btnOn && btnOff) {
    /**
     * Escucha el evento 'click' en el botón de encendido.
     */
    btnOn.addEventListener('click', turnOn);

    /**
     * Escucha el evento 'click' en el botón de apagado.
     */
    btnOff.addEventListener('click', turnOff);
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    if (dimmerInput) {
        /**
         * Escucha cambios en el slider de intensidad.
         * 'input' se dispara mientras se arrastra.
         */
        dimmerInput.addEventListener('input', updateIntensity);
    }

    if (colorPicker) {
        /**
         * Escucha cambios en el selector de color.
         * 'input' se dispara cambios en tiempo real.
         */
        colorPicker.addEventListener('input', updateColor);
    }
} else {
    console.error('No se encontraron los elementos de control en el DOM.');
}
