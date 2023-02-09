let estadoJuego = ""
//TEXTO PARA EL HTML
let inicio = `<section >
                <div class="contenedor contInicio">
                    <div class="contenedor inicio">                    
                        <h1>Elije con cual vas a iniciar</h1>
                        <div class="contenedor contBotones">
                            <button type="button" id="botonX" class="btn">✖</button>
                            <button type="button" id="botonO" class="btn">〇</button>
                        </div>
                    </div>
                </div>            
            </section>`;
let juego = `
    <section>
        <div class="contenedor contTriqui">
            <h1 id="participante" class="participante2">x</h1>
            <div id="juegoTriqui" class="contenedor triqui">
                <button class=""></button>
                <button class=""></button>
                <button class=""></button>
                <button class=""></button>
                <button class=""></button>
                <button class=""></button>
                <button class=""></button>
                <button class=""></button>
                <button class=""></button>
            </div>
        </div>
    </section>`
let ganadorJuego = `<section>
                        <div  class="contenedor ganador">
                            <h1 id="participante" class=""></h1>
                        </div>    
                    </section>`

//FUNCIONES PARA EL JUEGO
function render(documentHTML,innerHTML){
    documentHTML.innerHTML = innerHTML;    
}
function detertarClick(clasePersonaje) {
    let valorX =  "✖"
    let valorO = "〇"
    let estado = clasePersonaje

    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            if(estadoJuego==="PAUSA") return
            if(btn.innerText !== "") return
            document.getElementById("participante").innerHTML= estado === "participante1"? valorX : valorO;
            btn.innerHTML = estado === "participante1"? valorX : valorO;
            const posicionGanadora = combinaciones()
            console.log(combinaciones());
            if (typeof posicionGanadora ===  "object") {
                ganar(estado)
                return
            }
            if (posicionGanadora === "empate") {
                console.log("empate");
            }
            estado = estado === "participante1" ? "participante2" : "participante1";
        })
    })

}
function cambiarClase(idBtn,clasePersonaje,claseBoton,elejir) {

document.getElementById(idBtn).addEventListener('click',()=>{

document.querySelector("section").remove()
render(document.getElementById('contenedorTodo'),juego);
document.getElementById("participante").setAttribute("class",clasePersonaje);
document.getElementById("participante").innerHTML= elejir;
let numero = document.querySelectorAll("button")
for (let i = 0; i < numero.length; i++) {
    numero[i].setAttribute("class",claseBoton);

}
detertarClick(clasePersonaje);
})
    
}
function combinaciones() {
    const tablero = Array.from(document.querySelectorAll("button")).map(btn => btn.innerHTML)
    //HORIZONTAL
    for(let i = 0; i <= 9; i+=3) {
        if (tablero[i] &&
            tablero[i] === tablero[i+1] && 
            tablero[i] === tablero[i+2]) {
            return [i,i+1,i+2]

        }
    }
    //VERTICAL
    for(let i = 0; i <= 3; i++) {
        if (tablero[i] &&
            tablero[i] === tablero[i+3] && 
            tablero[i] === tablero[i+6]) {
            return [i,i+3,i+6]

        }
    }
    //CRUZ
    if (tablero[0] &&
        tablero[0] === tablero[4] && 
        tablero[0] === tablero[8]) {
        return [0,4,8]
        }

    if (tablero[2] &&
        tablero[2] === tablero[4] && 
        tablero[2] === tablero[6]) {
        return [2,4,6]

}
    if(tablero.includes("")) return false;
    return "empate"
}
function ganar(ganador) {
    estadoJuego = "PAUSA"
    render(document.getElementById('contenedorTodo'),ganadorJuego);
    if (ganador === "participante1") {
        document.getElementById("participante").innerHTML = ganador;
        document.querySelector(".ganador").setAttribute("class","contenedor ganador1");
    }else{
        document.getElementById("participante").innerHTML = ganador;
        document.querySelector(".ganador").setAttribute("class","contenedor ganador2");
    }
    setTimeout(function(){
        render(document.getElementById('contenedorTodo'),inicio);
        cambiarClase("botonX","participante1","btn1","✖")
        cambiarClase("botonO","participante2","btn2","〇")
        estadoJuego = "inicio"
    }, 3000);


}
//LLAMANDO A LAS FUNCIONES
render(document.getElementById('contenedorTodo'),inicio);

cambiarClase("botonX","participante1","btn1","✖")
cambiarClase("botonO","participante2","btn2","〇")







