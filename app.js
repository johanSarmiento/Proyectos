// CREACION DE ELEMENTOS 
const body = document.querySelector("body")
const contendorCalcu = document.createElement("div")
const calculadora = document.createElement("div")
const panel = document.createElement("div")
const contBotones = document.createElement("div")
const btnCero = document.createElement("button")
const btnUno = document.createElement("button")
const btnDos = document.createElement("button")
const btnTres = document.createElement("button")
const btnCuatro = document.createElement("button")
const btnCinco = document.createElement("button")
const btnSeis = document.createElement("button")
const btnSiete = document.createElement("button")
const btnOcho = document.createElement("button")
const btnNueve = document.createElement("button")
const btnSumar = document.createElement("button")
const btnRestar = document.createElement("button")
const btnMultiplicar = document.createElement("button")
const btnDividir = document.createElement("button")
const btnEliminar = document.createElement("button")
const btnPunto = document.createElement("button")
const btnIgual = document.createElement("button")
//ATRIBUTOS A LOS ELEMTOS
contendorCalcu.setAttribute("class","contenedor contCalcu")
calculadora.setAttribute("class","contenedor calculadora")
panel.setAttribute("class","contenedor panel")
contBotones.setAttribute("class","contBotones")
btnCero.setAttribute("class","btn btnCero")
btnUno.setAttribute("class","btn btnUno")
btnDos.setAttribute("class","btn btnDos")
btnTres.setAttribute("class","btn btnTres")
btnCuatro.setAttribute("class","btn btnCuatro")
btnCinco.setAttribute("class","btn btnCinco")
btnSeis.setAttribute("class","btn btnSeis")
btnSiete.setAttribute("class","btn btnSiete")
btnOcho.setAttribute("class","btn btnOcho")
btnNueve.setAttribute("class","btn btnNueve")
btnSumar.setAttribute("class","btn btnSuma")
btnRestar.setAttribute("class","btn btnRestar")
btnMultiplicar.setAttribute("class","btn btnMultiplicar")
btnDividir.setAttribute("class","btn btnDividir")
btnEliminar.setAttribute("class","btn btnEliminar")
btnPunto.setAttribute("class","btn btnPunto")
btnIgual.setAttribute("class","btn btnIgual")
//ASIGNANDO HIJOS
body.appendChild(contendorCalcu)
contendorCalcu.appendChild(calculadora)
calculadora.appendChild(panel)
calculadora.appendChild(contBotones)
contBotones.appendChild(btnCero)
contBotones.appendChild(btnUno)
contBotones.appendChild(btnDos)
contBotones.appendChild(btnTres)
contBotones.appendChild(btnCuatro)
contBotones.appendChild(btnCinco)
contBotones.appendChild(btnSeis)
contBotones.appendChild(btnSiete)
contBotones.appendChild(btnOcho)
contBotones.appendChild(btnNueve)
contBotones.appendChild(btnSumar)
contBotones.appendChild(btnRestar)
contBotones.appendChild(btnMultiplicar)
contBotones.appendChild(btnDividir)
contBotones.appendChild(btnEliminar)
contBotones.appendChild(btnPunto)
contBotones.appendChild(btnIgual)

//CONTENIDO
btnUno.textContent = "1"
btnDos.textContent = "2"
btnTres.textContent = "3"
btnCuatro.textContent = "4"
btnCinco.textContent = "5"
btnSeis.textContent = "6"
btnSiete.textContent = "7"
btnOcho.textContent = "8"
btnNueve.textContent = "9"
btnSumar.textContent = "+"
btnRestar.textContent = "-"
btnMultiplicar.textContent = "x"
btnDividir.textContent = "/"
btnEliminar.textContent = "C"
btnCero.textContent = "0"
btnIgual.textContent = "="
btnPunto.textContent = "."










