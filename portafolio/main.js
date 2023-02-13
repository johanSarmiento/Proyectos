//INNERHTML
const inicio = `
    <section id="inicio" class="contenedor secciones seccionInicio">
        <div class="contenedor contIncio">
            <div class="contenedor inicio">
                <p>Bienvenido</p>
                <h1 class="titulo">Soy <span class="color">Johan Sarmiento</span></h1>
                <p>Front-end Developer</p>
                <button class="btn btnSobreMi">Sobre mi</button>
            </div>
        </div>
        <div class="contenedor navRight">
            <ul class="contenedor listIcon"> 
                <li class="icon icInicio fondo"><a href="#"><img class="iconInicio" src="./sources/icon/icons8-casa.svg" alt="perfil"></a></li>
                <li class="icon icSoy"><a href="#"><img class="iconSoy" src="./sources/icon/persona.png" alt="perfil"></li>
                <li class="icon icPortafolio"><a href="#"><img class="iconPortafolio" src="./sources/icon/maletin.png" alt="perfil"></li>
                <li class="icon icContactanos"><a href="#"><img class="iconContactanos" src="./sources/icon/correo.png" alt="perfil"></li>
            </ul>
        </div>
    </section>
`
const quienSoy = `
<section id="quienSoy" class="contenedor secciones seccionSoy">
<div class="contenedor contQuienSoy">
    <h2 class="titulo">SOBRE MI</h2>
    <div class="contenedor contSoy">
        <div class="contenedorMitad soyLeft">
            <div class="contenedorMitad infoLeft">
                <p class="info"><span class="colorInfo">Nombres:</span> Johan stevan</p>
                <p class="info"><span class="colorInfo">Apellidos:</span> Sarmiento Cacua</p>    
                <p class="info"><span class="colorInfo">Años:</span> 18 Años</p>    
                <p class="info"><span class="colorInfo">Nacionalidad:</span> Colombiana</p>        
            </div>
            <div class="contenedorMitad infoRight">
                <p class="info"><span class="colorInfo">Telefono:</span> +57 3172195207</p>
                <p class="info"><span class="colorInfo">Correo:</span> johansarmiento47@gmail.com</p>    
                <p class="info"><span class="colorInfo">Discord:</span> Sarmiento#2035 </p>    
                <p class="info"><span class="colorInfo">Lenguaje:</span> español Ingles</p>
            </div>
        </div>
        <div class="contenedorMitad soyRight">
            <div class="datosPerso experiencia">
                <p class="numeroinfo">1+</p>
                <p class="textoInfo">años de experiencia</p>
            </div>
            <div class="datosPerso proyectos">
                <p class="numeroinfo">5+</p>
                <p class="textoInfo">Proyectos Finalizados</p>
            </div>
            <div class="datosPerso tazasCafe">
                <p class="numeroinfo">2K+</p>
                <p class="textoInfo">Tazas de cafe</p>
            </div>
            <div class="datosPerso clienteSatisfechos">
                <p class="numeroinfo">100%+</p>
                <p class="textoInfo">Cliente Satisfechos</p>
            </div>
        </div>
    </div>
    <h2 class="titulo">MIS HABILIDADES</h2>
    <div class="contenedor habilidades">
        <div class="contHabilidad" style="--porcentaje: 80">
            <svg>
                <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100" />
                <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100" />
            </svg>
            <p>80%</p>
            <p class="textoHabilidad">JavaScript</p>
        </div>
        <div class="contHabilidad" style="--porcentaje: 80">
            <svg>
                <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
                <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            </svg>
            <p class="HTML">80%</p>
            <p class="textoHabilidad">HTML</p>
        </div>
        <div class="contHabilidad" style="--porcentaje: 70">
            <svg>
                <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
                <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            </svg>
            <p class="CSS">70%</p>
            <p class="textoHabilidad">CSS</p>
        </div>
        <div class="contHabilidad" style="--porcentaje: 60">
            <svg>
                <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
                <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            </svg>
            <p class="JAVA">60%</p>
            <p class="textoHabilidad">JAVA</p>
        </div>
        <div class="contHabilidad" style="--porcentaje: 60">
            <svg>
            <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            </svg>
            <p class="mysql">60%</p>
            <p class="textoHabilidad">MYSQL</p>
        </div>
        <div class="contHabilidad" style="--porcentaje: 50">
            <svg>
            <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            </svg>
            <p class="php">50%</p>
            <p class="textoHabilidad">PHP</p>
        </div>
        <div class="contHabilidad" style="--porcentaje: 40">
            <svg>
            <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            </svg>
            <p class="vue">40%</p>
            <p class="textoHabilidad">VUE</p>
        </div>
        <div class="contHabilidad" style="--porcentaje: 50">
            <svg>
            <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            <circle class="habilidad" r="70" cx="50%" cy="50%" pathlength="100"/>
            </svg>
            <p class="bootstrap">50%</p>
            <p class="textoHabilidad">BOOTRTRAP</p>
        </div>
    </div>
</div>
<div class="contenedor navRight">
    <ul class="contenedor listIcon"> 
        <li class="icon icInicio"><a href="#"><img class="iconInicio" src="./sources/icon/icons8-casa.svg" alt="perfil"></a></li>
        <li class="icon icSoy fondo"><a href="#"><img class="iconSoy" src="./sources/icon/persona.png" alt="perfil"></li>
        <li class="icon icPortafolio"><a href="#"><img class="iconPortafolio" src="./sources/icon/maletin.png" alt="perfil"></li>
        <li class="icon icContactanos"><a href="#"><img class="iconContactanos" src="./sources/icon/correo.png" alt="perfil"></li>
    </ul>
</div>
</section>
`
const portafolio = `
<section id="portafolio" class="contenedor secciones seccionPortafolio">
<div class="contenedor contPortafolio">
    <h2 class="titulo">PORTAFOLIO</h2>
    <div class="contenedor contPorta">
        <div class="contenedor portafolio construsarHJ"></div>
        <div class="contenedor portafolio Quiz"></div>
        <div class="contenedor portafolio pokedex"></div>
        <div class="contenedor portafolio paginaEjemplo"></div>
        <div class="contenedor portafolio Triqui"></div>
    </div>
</div>

<div class="contenedor navRight">
    <ul class="contenedor listIcon"> 
        <li class="icon icInicio"><a href="#"><img class="iconInicio" src="./sources/icon/icons8-casa.svg" alt="perfil"></a></li>
        <li class="icon icSoy"><a href="#"><img class="iconSoy" src="./sources/icon/persona.png" alt="perfil"></li>
        <li class="icon icPortafolio fondo"><a href="#"><img class="iconPortafolio" src="./sources/icon/maletin.png" alt="perfil"></li>
        <li class="icon icContactanos"><a href="#"><img class="iconContactanos" src="./sources/icon/correo.png" alt="perfil"></li>
    </ul>
</div>
</section>
` 
const contactanos = `
<section id="quienSoy" class="contenedor secciones seccionContactanos">
    <div class="contenedor contIncio">
        <form action="">
            <input type="text" placeholder="Nombre">
            <input type="text" placeholder="Correo">
            <input type="text" placeholder="Tema">
            <input type="text" placeholder="Observacion">
        </form>

    </div>
    <div class="contenedor navRight">
        <ul class="contenedor listIcon"> 
            <li class="icon icInicio"><a href="#"><img class="iconInicio" src="./sources/icon/icons8-casa.svg" alt="perfil"></a></li>
            <li class="icon icSoy"><a href="#"><img class="iconSoy" src="./sources/icon/persona.png" alt="perfil"></li>
            <li class="icon icPortafolio"><a href="#"><img class="iconPortafolio" src="./sources/icon/maletin.png" alt="perfil"></li>
            <li class="icon icContactanos fondo"><a href="#"><img class="iconContactanos" src="./sources/icon/correo.png" alt="perfil"></li>
        </ul>
    </div>
</section>
`
function render(documentHtml, innerHtml) {
    documentHtml.innerHTML = innerHtml;
}
function cambiarPadian(documentHtml, seccion) {
    documentHtml.addEventListener('click', ()=>{
        document.querySelector(".secciones").remove()
        render(document.querySelector('body'), seccion );
        cambiarPadian(document.querySelector('.icInicio'), inicio);
        cambiarPadian(document.querySelector('.icSoy'), quienSoy);
        cambiarPadian(document.querySelector('.icPortafolio'), portafolio);
        cambiarPadian(document.querySelector('.icContactanos'), contactanos);
    })
} 
render(document.querySelector('body'), inicio);
cambiarPadian(document.querySelector('.icSoy'), quienSoy);
cambiarPadian(document.querySelector('.icPortafolio'), portafolio);
cambiarPadian(document.querySelector('.icContactanos'), contactanos);
