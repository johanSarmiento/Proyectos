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
            <li class="icon icSoy"><a href="#"><img class="iconSoy" src="./sources/icon/icons8-user-32.png" alt="perfil"></li>
            <li class="icon icPortafolio"><a href="#"><img class="iconPortafolio" src="./sources/icon/icons8-maletín.svg" alt="perfil"></li>
            <li class="icon icContactanos"><a href="#"><img class="iconContactanos" src="./sources/icon/icons8-componer-correo-50.png" alt="perfil"></li>
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
    <li class="icon icSoy fondo"><a href="#"><img class="iconSoy" src="./sources/icon/icons8-user-32.png" alt="perfil"></li>
    <li class="icon icPortafolio"><a href="#"><img class="iconPortafolio" src="./sources/icon/icons8-maletín.svg" alt="perfil"></li>
    <li class="icon icContactanos"><a href="#"><img class="iconContactanos" src="./sources/icon/icons8-componer-correo-50.png" alt="perfil"></li>
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
    <li class="icon icSoy"><a href="#"><img class="iconSoy" src="./sources/icon/icons8-user-32.png" alt="perfil"></li>
    <li class="icon icPortafolio fondo"><a href="#"><img class="iconPortafolio" src="./sources/icon/icons8-maletín.svg" alt="perfil"></li>
    <li class="icon icContactanos"><a href="#"><img class="iconContactanos" src="./sources/icon/icons8-componer-correo-50.png" alt="perfil"></li>
</ul>
</div>
</section>
` 
const contactanos = `
<section id="contactanos" class="contenedor secciones seccionContactanos">
    <div class="contenedor contContactanos">
        <h2 class="titulo">Ponte en contacto con nosotros</h2>
        <form class="contenedor formulario" action="">
            <input class="textoEnviar" type="text" placeholder="Nombre">
            <input class="textoEnviar" type="text" placeholder="Correo">
            <input class="textoEnviar" type="text" placeholder="Tema">
            <textarea class="textoArea" cols="115" rows="10" placeholder="Observaciones"></textarea>
            <button class="btn botonEnviar">Enviar</button>
        </form>
    </div>
    <footer class="contenedor footerContactanos">
        <h2 class="titulo">haz tu sueño realidad</h2>
        <p class="texto">
        No dude en ponerse en contacto conmigo. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de sus visiones.</p>
        <div class="contenedor contRedes">
            <div class="contenedorMitad contacto">
                <div class="contenedor correoFooter">
                    <div class="iconFooter iconCorreo"></div>
                    <div class="contenedor contactanos">
                        <p class="texto">Mi Correo</p>
                        <p class="texto">johansarmiento47@gmail.com</p>
                    </div>
                </div>
                <div class="contenedor telefonoFooter">
                    <div class="iconFooter iconTelefono"></div>
                    <div class="contenedor contactanos">
                        <p class="texto">Llamame</p>
                        <p class="texto">+57 3172195207</p></div>
                    </div>
            </div>
            <div class="contenedorMitad contIconosFooter">
                <div class="iconFooter facebock"><a href="#"></a></div>
                <div class="iconFooter instagram"><a href="#"></a></div>
                <div class="iconFooter whatsapp"><a href="#"></a></div>
            </div>
        </div>
    </footer>
    <div class="contenedor navRight">
        <ul class="contenedor listIcon"> 
            <li class="icon icInicio"><a href="#"><img class="iconInicio" src="./sources/icon/icons8-casa.svg" alt="perfil"></a></li>
            <li class="icon icSoy"><a href="#"><img class="iconSoy" src="./sources/icon/icons8-user-32.png" alt="perfil"></li>
            <li class="icon icPortafolio"><a href="#"><img class="iconPortafolio" src="./sources/icon/icons8-maletín.svg" alt="perfil"></li>
            <li class="icon icContactanos fondo"><a href="#"><img class="iconContactanos" src="./sources/icon/icons8-componer-correo-50.png" alt="perfil"></li>
        </ul>
    </div>
</section>
`
const imprimir = `
<section id="HojaVida" class="hojaDeVida">
    <div class="contenedor contHojaVidas">
        <div class="contenedor header">
            <div class="contenedor fotoHeader">
            <img class="iconInicio" src="./sources/icon/icons8-casa.svg" alt="perfil">
            </div>
            <div class="contenedor textoHeader">
                <h1>Johan Stevan Sarmiento Cacua</h1>
                <p>Desarrollador Frond-end con un año de experiencia a la creacion de aplicacion web</p>
            </div>
        </div>
        <div class="contenedor bodyUno">
            <div class="contenedor infoBodyUno contacto">
                <h2 class="titulo">CONTACTO</h2>
                <div class="contenedor contBodyUno">
                    <div class="contenedor contIcon">
                    <img class="iconIbucacion" src="./sources/icon/icons8-actualización-de-ubicación-50.png" alt="perfil">
                    </div>
                    <p>calle 29A 11E-31 APT 501</p>
                </div>
                <div class="contenedor contBodyUno">
                    <div class="contenedor contIcon">
                        <img class="iconTelefono" src="./sources/icon/icons8-mensaje-de-telefono-30.png" alt="perfil">      
                    </div>
                    <p>+57 3172195207</p>
                </div>
                <div class="contenedor contBodyUno">
                    <div class="contenedor contIcon">
                        <img class="iconCorreo" src="./sources/icon/icons8-leer-el-mensaje-50.png" alt="perfil">  
                    </div>
                    <p>johansarmiento47@gmail.com</p>
                </div>
            </div>
            <div class="contenedor infoBodyUno aptitudes">
                <h2 class="titulo">APTITUDES</h2>
                <ul class="contenedor listaAptitudes">
                    <li>Conocomientos en leguaje de programacion</li>
                    <li>Conocomientos de frameworks</li>
                    <li>Aprendizaje Rapido</li>
                    <li>Resolucion de Problemas </li>
                </ul>
            </div>
            <div class="contenedor infoBodyUno idioma">
                <h2>IDIOMAS</h2>
                <P><span>Español:</span> idioma nativo </P>
                <P><span>Ingles:</span> Aprendiendo </P>
            </div>
            <div class="contenedor infoBodyUno formacion">
                <h2>FORMACION ADICIONAL</h2>
                <p>Contabilidad sistematizada</p>
                <p>Curos de Vue Udemy</p>
            </div>
        </div>

        
        <div class="contenedor bodyDos">
            <div class="contenedor experiencia">
                <h2 class="titulo">EXPERIENCIA LABORAL</h2>
                <div>
                    <P>Desarrollador Frond-end</P>
                    <P>Coex Bucaramanga</P>
                    <ul>
                        <li>Desarrollador Frond-end</li>
                        <li>Desarrollador Base de Datos</li>
                    </ul>
                </div>
            </div>
            <div class="contenedor formacionAcademica">
            <h2 class="titulo">FORMACION ACADEMICA</h2>
            <div class="contenedor contabilidad">
                <p>Contabilidad Sistematizada</p>
                <p>MariaAuxilidadora</p>
            </div>
            <div class="contenedor web">
                <p>Desarrollador Web</p>
                <p>COEX</p>
            </div>
            </div>
        </div>
    </div>
</section>
`

function render(documentHtml, innerHtml) {
    documentHtml.innerHTML = innerHtml;
}
function cambiarPadian(documentHtml, seccion) {
    console.log(0);
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

document.querySelector("body").addEventListener('keydown', (event)=>{
    console.log(event.keyCode);
    if(event.keyCode === 17){
        document.querySelector(".secciones").remove()
        render(document.querySelector('body'), imprimir );
    }
}
)