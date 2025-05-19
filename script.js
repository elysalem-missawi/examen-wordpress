(function() {
    const preguntas = [
        {
            pregunta: '¿Qué archivo es el principal de estilos en un tema de WordPress?',
            opciones: ['index.php', 'style.css', 'functions.php', 'header.php'],
            correcta: 1
        },
        {
            pregunta: '¿Qué función de PHP se utiliza para incluir el archivo header.php en WordPress?',
            opciones: ['include_header()', 'get_header()', 'require_header()', 'load_header()'],
            correcta: 1
        },
        {
            pregunta: '¿En qué archivo de WordPress se suelen añadir funciones personalizadas para el tema?',
            opciones: ['style.css', 'index.php', 'functions.php', 'footer.php'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función se utiliza para cargar correctamente hojas de estilo en WordPress?',
            opciones: ['load_style()', 'add_css()', 'wp_enqueue_style()', 'include_css()'],
            correcta: 2
        },
        {
            pregunta: '¿Qué hook se utiliza para encolar scripts y estilos en WordPress?',
            opciones: ['admin_enqueue_scripts', 'wp_head', 'wp_footer', 'wp_enqueue_scripts'],
            correcta: 3
        },
        {
            pregunta: '¿Cuál de las siguientes NO es una buena práctica mencionada para WordPress?',
            opciones: ['Usar solo los plugins necesarios', 'Usar un hosting gratuito', 'Optimizar imágenes', 'Mantener WordPress actualizado'],
            correcta: 1
        },
        {
            pregunta: '¿Qué formato de imagen es recomendado para la web por su capacidad de reducir peso sin perder calidad?',
            opciones: ['JPG', 'PNG', 'GIF', 'WebP'],
            correcta: 3
        },
        {
            pregunta: '¿Qué tipo de caché guarda copias de la web en servidores de todo el mundo para acelerar la carga?',
            opciones: ['Caché del navegador', 'Caché del servidor', 'Caché de plugins', 'Caché de CDN'],
            correcta: 3
        },
        {
            pregunta: '¿Cuál de los siguientes temas se menciona como un tema ligero para WordPress?',
            opciones: ['Twenty Twenty-One', 'Divi', 'Astra', 'Avada'],
            correcta: 2
        },
        {
            pregunta: '¿En qué carpeta dentro de wp-content se almacenan los temas de WordPress?',
            opciones: ['plugins/', 'themes/', 'uploads/', 'languages/'],
            correcta: 1
        },
        {
            pregunta: '¿Qué herramienta online se menciona para reducir el tamaño de las imágenes sin perder calidad?',
            opciones: ['Smush', 'Imagify', 'TinyPNG', 'Kraken.io'],
            correcta: 2 // Corregido a TinyPNG según el texto
        },
        {
            pregunta: '¿Cuál es el nombre del archivo principal de estilos de un tema de WordPress?',
            opciones: ['main.css', 'styles.php', 'template.css', 'style.css'],
            correcta: 3
        },
        {
            pregunta: '¿Qué función se utiliza para obtener la ruta del directorio del tema actual en WordPress?',
            opciones: ['get_theme_path()', 'theme_url()', 'get_template_directory_uri()', 'get_theme_uri()'],
            correcta: 2
        },
        {
            pregunta: 'Según el texto, ¿qué se debe hacer ANTES de actualizar WordPress o los plugins?',
            opciones: ['Desactivar todos los plugins', 'Crear una copia de seguridad', 'Borrar la caché', 'Editar el archivo wp-config.php'],
            correcta: 1
        },
        {
            pregunta: '¿Cuál es la principal función de un tema de WordPress?',
            opciones: ['Gestionar la base de datos', 'Almacenar el contenido del sitio', 'Definir la apariencia visual del sitio', 'Añadir funcionalidades extra al sitio'],
            correcta: 2
        },
        {
            pregunta: '¿Qué archivo de un tema de WordPress actúa como la "puerta de entrada" si no se encuentra una plantilla más específica?',
            opciones: ['header.php', 'footer.php', 'page.php', 'index.php'],
            correcta: 3
        },
        {
            pregunta: '¿Qué archivo se utiliza en un tema de WordPress para mostrar páginas estáticas como "Sobre mí" o "Contacto"?',
            opciones: ['single.php', 'archive.php', 'page.php', 'front-page.php'],
            correcta: 2
        },
        {
            pregunta: '¿Qué archivo se utiliza en un tema de WordPress para mostrar una sola entrada del blog?',
            opciones: ['page.php', 'home.php', 'single.php', 'index.php'],
            correcta: 2
        },
        {
            pregunta: '¿Qué prefijo se utiliza comúnmente en Tailwind CSS para las clases de fondo?',
            opciones: ['text-', 'bg-', 'font-', 'border-'],
            correcta: 1
        },
        {
            pregunta: 'Según el texto, ¿qué comando de npm se utiliza para construir los estilos de Tailwind CSS?',
            opciones: ['npm start', 'npm run dev', 'npm run build', 'npm install'],
            correcta: 2
        },
        {
            pregunta: '¿Qué se debe incluir en la parte superior del archivo `style.css` de un tema de WordPress?',
            opciones: ['Solo estilos CSS', 'Información del tema (nombre, autor, etc.)', 'Funciones PHP', 'Scripts de JavaScript'],
            correcta: 1
        },
        {
            pregunta: '¿Qué archivo de WordPress contiene la información que se muestra al final de cada página?',
            opciones: ['header.php', 'sidebar.php', 'footer.php', 'functions.php'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para añadir soporte para imágenes destacadas en un tema?',
            opciones: ['add_thumbnail_support()', 'set_post_thumbnail()', 'add_theme_support(\'post-thumbnails\')', 'enable_featured_image()'],
            correcta: 2
        },
        {
            pregunta: '¿Cuál es el nombre del directorio donde se deben descomprimir los archivos de WordPress en un servidor local con XAMPP?',
            opciones: ['www', 'htdocs', 'localhost', 'xampp'],
            correcta: 1
        },
        {
            pregunta: '¿Qué herramienta se menciona para manejar las bases de datos en un entorno local con XAMPP?',
            opciones: ['Administrador de XAMPP', 'Panel de control de MySQL', 'phpMyAdmin', 'Gestor de bases de datos local'],
            correcta: 2
        },
        {
            pregunta: '¿Qué prefijo se utiliza comúnmente en Tailwind CSS para las clases de texto?',
            opciones: ['bg-', 'shadow-', 'text-', 'border-'],
            correcta: 2
        },
        {
            pregunta: '¿Qué archivo de configuración utiliza Tailwind CSS?',
            opciones: ['tailwind.config.css', 'tailwind.config.php', 'postcss.config.js', 'tailwind.config.js'],
            correcta: 3
        },
        {
            pregunta: '¿Qué comando de npm se utiliza para iniciar un proyecto con node y poder utilizar sus dependencias?',
            opciones: ['npm install', 'npm start', 'npm init -y', 'npm add'],
            correcta: 2
        },
        {
            pregunta: '¿Qué se define en la sección `content` del archivo `tailwind.config.js`?',
            opciones: ['Los colores del tema', 'Las fuentes utilizadas', 'Las rutas a los archivos que usarán Tailwind', 'Los plugins de Tailwind'],
            correcta: 2
        },
        {
            pregunta: '¿Qué directiva de Tailwind CSS se utiliza para importar los estilos base?',
            opciones: ['@tailwind components;', '@tailwind utilities;', '@tailwind base;', '@import "tailwindcss/base";'],
            correcta: 2
        },
        {
            pregunta: '¿Qué directiva de Tailwind CSS se utiliza para importar los estilos de los componentes?',
            opciones: ['@tailwind base;', '@import "tailwindcss/components";', '@tailwind utilities;', '@tailwind components;'],
            correcta: 3
        },
        {
            pregunta: '¿Qué directiva de Tailwind CSS se utiliza para importar las clases de utilidad?',
            opciones: ['@import "tailwindcss/utilities";', '@tailwind base;', '@tailwind components;', '@tailwind utilities;'],
            correcta: 3
        },
        {
            pregunta: '¿Qué archivo se menciona para configurar los colores personalizados en Tailwind CSS?',
            opciones: ['src/style.css', 'postcss.config.js', 'tailwind.config.js', 'package.json'],
            correcta: 2
        },
        {
            pregunta: '¿En qué sección del archivo `tailwind.config.js` se pueden agregar colores personalizados?',
            opciones: ['plugins', 'variants', 'theme.extend.colors', 'corePlugins'],
            correcta: 2
        },
        {
            pregunta: '¿Qué unidad de medida se utiliza en el ejemplo para definir el espaciado personalizado en Tailwind CSS (ej: \'128\': \'32rem\')?',
            opciones: ['px', 'em', 'rem', '%'],
            correcta: 2
        },
        {
            pregunta: '¿En qué sección del archivo `tailwind.config.js` se definen las fuentes personalizadas?',
            opciones: ['theme.extend.spacing', 'plugins', 'theme.extend.fontFamily', 'variants'],
            correcta: 2
        },
        {
            pregunta: '¿Qué propiedad de CSS se utiliza en el ejemplo para definir sombras personalizadas en Tailwind CSS?',
            opciones: ['borderShadow', 'text-shadow', 'box-shadow', 'drop-shadow'],
            correcta: 2
        },
        {
            pregunta: 'Después de modificar el archivo `tailwind.config.js`, ¿qué comando se debe ejecutar para que los cambios tengan efecto?',
            opciones: ['npm start', 'npm install tailwindcss', 'npm run build', 'npm update'],
            correcta: 2
        },
        {
            pregunta: '¿Qué se puede personalizar de un proyecto Tailwind CSS utilizando el archivo de configuración?',
            opciones: ['Solo colores', 'Solo fuentes', 'Casi todos los aspectos (colores, fuentes, tamaños, etc.)', 'Solo los plugins'],
            correcta: 2
        }
    ];
    let actual = 0;
    let jugando = true;
    let score = 0;
    const q = document.getElementById('millionaire-question');
    const opts = document.querySelectorAll('.millionaire-option');
    const msg = document.getElementById('millionaire-message');
    const prog = document.getElementById('millionaire-progress');
    const restart = document.getElementById('millionaire-restart');
    if (!q || !opts.length) return;
    function mostrarPregunta() {
        const p = preguntas[actual];
        q.textContent = p.pregunta;
        opts.forEach((btn, i) => {
            btn.textContent = String.fromCharCode(65 + i) + '. ' + p.opciones[i];
            btn.disabled = false;
            btn.style.background = '';
        });
        msg.textContent = '';
        prog.textContent = `Pregunta ${actual + 1} de ${preguntas.length}`;
    }
    opts.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            if (!jugando) return;
            const correcta = preguntas[actual].correcta;
            if (i === correcta) {
                btn.style.background = '#27ae60';
                msg.textContent = '¡Correcto!';
                score++;
            } else {
                btn.style.background = '#e74c3c';
                msg.textContent = `Incorrecto. La respuesta era: ${preguntas[actual].opciones[correcta]}`;
            }
            opts.forEach(b => b.disabled = true);
            setTimeout(() => {
                actual++;
                if (actual < preguntas.length) {
                    mostrarPregunta();
                } else {
                    jugando = false;
                    q.textContent = score === preguntas.length ? '¡Felicidades! ¡Ganaste el millón!' : 'Juego terminado';
                    msg.textContent = `Puntaje: ${score} de ${preguntas.length}`;
                    prog.textContent = '';
                    restart.style.display = 'inline-block';
                }
            }, 1200);
        });
    });
    restart.addEventListener('click', function() {
        actual = 0;
        jugando = true;
        score = 0;
        restart.style.display = 'none';
        mostrarPregunta();
    });
    mostrarPregunta();
})();