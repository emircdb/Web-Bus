document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    // Función para aplicar el tema guardado en localStorage
    const applyStoredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggleButton.textContent = '☀️ Modo Claro';
        } else {
            // Por defecto o si es 'light'
            document.body.classList.remove('dark-theme');
            themeToggleButton.textContent = '🌑 Modo Oscuro';
        }
    };

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        let theme = 'light';
        if (document.body.classList.contains('dark-theme')) {
            themeToggleButton.textContent = '☀️ Modo Claro';
            theme = 'dark';
        } else {
            themeToggleButton.textContent = '🌑 Modo Oscuro';
        }
        localStorage.setItem('theme', theme);
    });

    // Aplicar el tema correcto al cargar la página
    applyStoredTheme();

    // --- Funcionalidad del Menú Hamburguesa ---
    const btnMenu = document.getElementById('menu-hamburguesa');
    const menuLateral = document.getElementById('menu-lateral');

    if (btnMenu && menuLateral) {
        btnMenu.addEventListener('click', () => {
            menuLateral.classList.toggle('oculto');
        });
    }

    const links = {
        'indexinicio.html': document.getElementById('inicio-link'),
        'cooperativa.html': document.getElementById('cooperativa-link'),
        'contacto.html': document.getElementById('contacto-link'),
        'index.html': document.getElementById('recorridos-link')
    };
    const current = window.location.pathname.split('/').pop().toLowerCase();
    if (links[current]) {
        links[current].style.display = 'none';
    }
});