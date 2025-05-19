(function() {
    const preguntas = [
        {
            pregunta: '¿Cómo se inicia el código PHP?',
            opciones: ['<php>', '<?php', 'PHP start', '<?'],
            correcta: 1
        },
        {
            pregunta: '¿Cuál es la forma correcta de escribir un comentario de una línea en PHP?',
            opciones: ['// comentario', '# comentario', '/* comentario */', '-- comentario'],
            correcta: 0
        },
        {
            pregunta: '¿Qué función se utiliza en PHP para mostrar texto en la pantalla?',
            opciones: ['print()', 'display()', 'show()', 'echo()'],
            correcta: 3
        },
        {
            pregunta: '¿Qué tipo de dato almacena valores verdaderos o falsos en PHP?',
            opciones: ['String', 'Integer', 'Float', 'Boolean'],
            correcta: 3
        },
        {
            pregunta: '¿Cómo se concatenan variables de texto en PHP?',
            opciones: ['+', ',', '.', 'and'],
            correcta: 2
        },
        {
            pregunta: '¿Cómo se define un array simple en PHP?',
            opciones: ['$array = {}', '$array = ()', '$array = []', '$array = array()'],
            correcta: 3
        },
        {
            pregunta: '¿Cómo se accede al primer elemento de un array llamado `$colores` en PHP?',
            opciones: ['$colores(0)', '$colores[1]', '$colores{0}', '$colores[0]'],
            correcta: 3
        },
        {
            pregunta: '¿Cómo se define un array asociativo en PHP?',
            opciones: ['$usuario = ("nombre" => "Carlos")', '$usuario = {"nombre": "Carlos"}', '$usuario = array("nombre" => "Carlos")', '$usuario = ["nombre": "Carlos"]'],
            correcta: 2
        },
        {
            pregunta: '¿Qué estructura condicional se utiliza en PHP para ejecutar diferentes bloques de código según una condición?',
            opciones: ['switch', 'if...else', 'while', 'for'],
            correcta: 1
        },
        {
            pregunta: '¿Qué estructura condicional se utiliza en PHP para verificar múltiples condiciones secuencialmente?',
            opciones: ['if...elseif...else', 'for', 'do...while', 'switch'],
            correcta: 0
        },
        {
            pregunta: '¿Qué bucle en PHP se utiliza para iterar un número específico de veces?',
            opciones: ['foreach', 'while', 'do...while', 'for'],
            correcta: 3
        },
        {
            pregunta: '¿Qué bucle en PHP es especialmente útil para recorrer elementos de un array?',
            opciones: ['for', 'while', 'do...while', 'foreach'],
            correcta: 3
        },
        {
            pregunta: '¿Cómo se define una función en PHP?',
            opciones: ['function NombreFuncion() {}', 'def NombreFuncion() {}', 'void NombreFuncion() {}', 'NombreFuncion = function() {}'],
            correcta: 0
        },
        {
            pregunta: '¿Cómo se devuelve un valor desde una función en PHP?',
            opciones: ['output $valor;', 'return $valor;', 'send $valor;', 'give $valor;'],
            correcta: 1
        },
        {
            pregunta: '¿Cómo se define una clase en PHP?',
            opciones: ['class NombreClase {}', 'struct NombreClase {}', 'object NombreClase {}', 'type NombreClase {}'],
            correcta: 0
        },
        {
            pregunta: '¿Cómo se declara una propiedad pública en una clase PHP?',
            opciones: ['var $nombre;', 'private $nombre;', 'protected $nombre;', 'public $nombre;'],
            correcta: 3
        },
        {
            pregunta: '¿Cómo se define un método en una clase PHP?',
            opciones: ['method saludar() {}', 'function saludar() {}', 'public function saludar() {}', 'saludar = function() {}'],
            correcta: 2
        },
        {
            pregunta: '¿Cómo se crea una instancia de una clase en PHP?',
            opciones: ['$objeto = Clase();', '$objeto = new Clase;', '$objeto = create Clase;', '$objeto = make Clase;'],
            correcta: 1
        },
        {
            pregunta: '¿Cómo se accede a una propiedad de un objeto en PHP?',
            opciones: ['$objeto->nombre', '$objeto.nombre', '$objeto::nombre', '$objeto["nombre"]'],
            correcta: 0
        },
        {
            pregunta: '¿Cómo se llama a un método de un objeto en PHP?',
            opciones: ['$objeto->saludar()', '$objeto.saludar()', '$objeto::saludar()', '$objeto["saludar"]()'],
            correcta: 0
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para obtener el nombre del sitio?',
            opciones: ['get_site_name()', 'blog_name()', 'get_bloginfo(\'name\')', 'site_title()'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para mostrar el título de la entrada actual dentro del Loop?',
            opciones: ['get_the_title()', 'show_title()', 'display_title()', 'the_title()'],
            correcta: 3
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para obtener la URL del post actual?',
            opciones: ['get_post_url()', 'the_url()', 'get_permalink()', 'post_link()'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función de WordPress verifica si el post actual tiene una imagen destacada?',
            opciones: ['check_thumbnail()', 'has_featured_image()', 'post_has_thumbnail()', 'has_post_thumbnail()'],
            correcta: 3
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para mostrar las categorías de un post separadas por comas?',
            opciones: ['list_categories()', 'get_categories()', 'the_category(\',\')', 'show_post_categories()'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para mostrar un menú registrado por su ubicación en el tema?',
            opciones: ['show_menu()', 'display_navigation()', 'wp_show_nav_menu()', 'wp_nav_menu()'],
            correcta: 3
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para mostrar una zona de widgets registrada por su ID?',
            opciones: ['show_sidebar()', 'display_widgets()', 'get_sidebar()', 'dynamic_sidebar()'],
            correcta: 3
        },
        {
            pregunta: '¿Qué función condicional de WordPress devuelve `true` si la página actual es la página de inicio?',
            opciones: ['is_front()', 'is_home()', 'is_index()', 'is_main_page()'],
            correcta: 1
        },
        {
            pregunta: '¿Qué función condicional de WordPress devuelve `true` si la página actual es una entrada individual?',
            opciones: ['is_post()', 'is_article()', 'is_single()', 'is_the_post()'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función condicional de WordPress devuelve `true` si la página actual es una página estática?',
            opciones: ['is_static_page()', 'is_page()', 'is_single_page()', 'is_type_page()'],
            correcta: 1
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para limpiar texto para su uso en HTML, convirtiendo caracteres especiales en entidades?',
            opciones: ['sanitize_html()', 'clean_text()', 'esc_html()', 'secure_text()'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para limpiar texto para atributos HTML?',
            opciones: ['sanitize_attribute()', 'clean_attr()', 'esc_attr()', 'secure_attr()'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para filtrar HTML permitiendo solo etiquetas seguras?',
            opciones: ['filter_html()', 'sanitize_html_content()', 'wp_kses_post()', 'secure_html()'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para limpiar URLs para evitar código malicioso?',
            opciones: ['sanitize_url()', 'clean_url()', 'esc_url()', 'secure_url()'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función de WordPress se utiliza para eliminar etiquetas HTML y caracteres no válidos de un texto?',
            opciones: ['strip_text()', 'sanitize_string()', 'wp_strip_all_tags()', 'sanitize_text_field()'],
            correcta: 3
        },
        {
            pregunta: '¿Cuál es el propósito principal de "The Loop" en WordPress?',
            opciones: ['Gestionar la base de datos', 'Mostrar la estructura del tema', 'Recorrer y mostrar publicaciones', 'Cargar archivos CSS y JS'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función se utiliza dentro de "The Loop" para preparar los datos de la publicación actual?',
            opciones: ['get_post_data()', 'load_post()', 'the_post()', 'fetch_post()'],
            correcta: 2
        },
        {
            pregunta: '¿Qué función se utiliza dentro de "The Loop" para mostrar el contenido completo de una publicación?',
            opciones: ['show_content()', 'display_the_content()', 'the_post_content()', 'the_content()'],
            correcta: 3
        },
        {
            pregunta: '¿Qué función se utiliza dentro de "The Loop" para verificar si hay más publicaciones para mostrar?',
            opciones: ['have_more()', 'next_post()', 'has_next_post()', 'have_posts()'],
            correcta: 3
        },
        {
            pregunta: '¿En qué tipo de archivos de WordPress es fundamental el uso de "The Loop"?',
            opciones: ['functions.php', 'wp-config.php', 'archivos de plantilla del tema', 'archivos de plugin'],
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