// Contenedor donde se mostrarán los platos
const menu = document.getElementById("menu");

// Función para alternar la barra lateral
function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("closed");
}

// Función para mostrar Entradas
function showEntradas() {
    menu.innerHTML = `
        <h3>Entradas</h3>
        <div id="dishes">
            <div class="dish">
                <img src="images/lechedetigre.jpeg" alt="Leche de Tigre">
                <h4>Leche de Tigre</h4>
                <p>La Leche de Tigre es una bebida típica de la gastronomía peruana. Este jugo tiene una base de jugo de lima, caldo de pescado, cilantro, ajo, jengibre, ají y otros condimentos que absorben el sabor del pescado crudo.</p>
            </div>
            <div class="dish">
                <img src="images/causaacevichada.jpeg" alt="Causa Acevichada">
                <h4>Causa Acevichada</h4>
                <p>La Causa Acevichada es una variación creativa de la tradicional causa limeña. Consiste en una capa de puré de papa amarilla sazonada con ají amarillo, limón y aceite, que se rellena con ceviche de pescado o mariscos.</p>
            </div>
            <div class="dish">
                <img src="images/chupe.jpeg" alt="Anticuchos">
                <h4>Chupe de langostinos</h4>
                <p>El Chupe de Langostinos es un tradicional plato de la gastronomía peruana. Se trata de una sopa espesa y reconfortante, elaborada con langostinos frescos, papas, arroz, leche, caldo de mariscos, ají amarillo y otros ingredientes que aportan un sabor suave pero delicioso.</p>
            </div>

        </div>`;
    menu.style.display = "block";
}

// Función para mostrar Platos Principales
function showPlatoPrincipal() {
    menu.innerHTML = `
        <h3>Platos Principales</h3>
        <div id="dishes">
            <div class="dish">
                <img src="images/cevichemixto.jpeg" alt="Ceviche Mixto">
                <h4>Ceviche Mixto</h4>
                <p>El Ceviche Mixto es una deliciosa variante del ceviche tradicional peruano que combina varios tipos de mariscos frescos, como pescado, camarones, calamares y conchas, marinados en jugo de limón y sazonados con ají, cebolla roja, cilantro y sal. </p>
            </div>
            <div class="dish">
                <img src="images/lomo.jpeg" alt="Lomo Saltado">
                <h4>Lomo Saltado</h4>
                <p>Este delicioso platillo consiste en un salteado de trozos de carne de res jugosa, cebolla, tomate y ají amarillo, todo cocinado en una sartén a fuego alto con salsa de soya. Se acompaña típicamente con arroz blanco y papas fritas</p>
            </div>
            <div class="dish">
                <img src="images/chicharron.jpeg" alt="Ají de Gallina">
                <h4>Chicharron de pescado</h4>
                <p>El Chicharrón de Pescado es un plato típico de la cocina peruana que consiste en trozos de pescado, que se marinan con especias y se fríen hasta quedar crujientes por fuera y jugosos por dentro.</p>
            </div>
            <div class="dish">
                <img src="images/arrozchaufa.jpeg" alt="Arroz Chaufa">
                <h4>Arroz con Mariscos</h4>
                <p>e trata de un arroz sazonado con caldo de mariscos, que se cocina junto a una variedad de mariscos frescos como camarones, calamares, conchas y mejillones. El arroz se impregna de los sabores del mar y de condimentos como el ajo, el ají amarillo, la cebolla y el cilantro, lo que le da un sabor delicioso y aromático.</p>
            </div>
            <div class="dish">
                <img src="images/tacutacu.jpeg" alt="Tacu Tacu">
                <h4>Tallarin Saltado</h4>
                <p>Este plato consiste en tallarines salteados rápidamente en un wok junto con trozos de carne de res, pollo o mariscos, acompañados de cebolla, tomate, ají amarillo y salsa de soja.</p>
            </div>
            <div class="dish">
                <img src="images/causarellena.jpeg" alt="Causa Rellena">
                <h4>Ceviche Clásico</h4>
                <p> El Ceviche Clásico es un plato refrescante y vibrante, ideal como entrada o plato principal. Se prepara con pescado fresco, que se corta en cubos y se marina con jugo de limón, sal, pimienta, cilantro y ají amarillo, lo que le da un sabor fresco, ácido y ligeramente picante.</p>
            </div>
        </div>`;
    menu.style.display = "block";
}

// Función para mostrar Bebidas
function showBebidas() {
    menu.innerHTML = `
        <h3>Bebidas</h3>
        <div id="dishes">
            <div class="dish">
                <img src="images/cafe.jpeg" alt="Café">
                <h4>Café</h4>
                <p>Café espresso fuerte y aromático...</p>
            </div>
            <div class="dish">
                <img src="images/chicha.jpeg" alt="Chicha Morada">
                <h4>Chicha Morada</h4>
                <p>Bebida tradicional hecha con maíz morado...</p>
            </div>
            <div class="dish">
                <img src="images/piscosour.jpeg" alt="Pisco Sour">
                <h4>Pisco Sour</h4>
                <p>La bebida nacional, con pisco, limón y clara de huevo...</p>
            </div>
            <div class="dish">
                <img src="images/aguafresca.jpeg" alt="Agua Fresca">
                <h4>Agua Fresca</h4>
                <p>Bebida ligera y refrescante con frutas tropicales...</p>
            </div>
            <div class="dish">
                <img src="images/jugonatural.jpeg" alt="Jugo Natural">
                <h4>Jugo Natural</h4>
                <p>Jugos frescos hechos con frutas orgánicas...</p>
            </div>
            <div class="dish">
                <img src="images/teverde.jpeg" alt="Té Verde">
                <h4>Té Verde</h4>
                <p>Bebida caliente llena de antioxidantes...</p>
            </div>
        </div>`;
    menu.style.display = "block";
}


async function getRecommendation() {
    const response = await fetch('recommendation.php', {  // Ruta a tu archivo PHP
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        prompt: "Recomiéndame un plato de mariscos del menú.",

            
        }),
    });
    const data = await response.json();
    console.log(data.choices[0].text);  // Aquí obtienes la respuesta de GPT-4

    
}


