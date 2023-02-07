const cuerpo = document.getElementById('pokedex');
const btnSiguiente = document.createElement("button")
const btnAtras = document.createElement("button")
//ASIGNANDO LOS ATRIBUTOS
btnSiguiente.setAttribute("class", "btn btnSiguiente")
btnAtras.setAttribute("class", "btn btnAtras")
//ASIGNANDO HIJOS
cuerpo.appendChild(btnSiguiente)
cuerpo.appendChild(btnAtras)
//ASIGNANDO VALORES BOTNOES 
btnSiguiente.textContent = "Siguiente"
btnAtras.textContent = "Atras"


async function llamarApi(id) {
    let api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let pokemos = await api.json()
    console.log(pokemos);   
    llenarCarta(pokemos)
}

function llenarCarta(data) {
const body = document.getElementById("cartas")
const nav  = document.getElementById("nav")
const cartasPokemon = document.createElement("div")
const contImg = document.createElement("div")
const contInfo = document.createElement("div")
const imgPokemon = document.createElement("img")
const nombrePokemon = document.createElement("h2")
const tipoPokemon = document.createElement("p")
// const tipoPokemon2 = document.createElement("p")
const numPokemon = document.createElement("p")
//ASIGNANDO LOS ATRIBUTOS
cartasPokemon.setAttribute("class", "contenedor carta")
contImg.setAttribute("class", "contenedor contImg")
contInfo.setAttribute("class", "contenedor contInfo")
imgPokemon.setAttribute("class", "imgPokemon")
nombrePokemon.setAttribute("class", "nombrePokemon")
tipoPokemon.setAttribute("class", "tipoPokemon")
// tipoPokemon2.setAttribute("class", "tipoPokemon2")
numPokemon.setAttribute("class", "numPokemon")
//ASIGNANDO HIJOS
body.appendChild(cartasPokemon)
cartasPokemon.appendChild(contInfo) 
cartasPokemon.appendChild(contImg)
contImg.appendChild(numPokemon)
contImg.appendChild(imgPokemon)
contInfo.appendChild(nombrePokemon)
contInfo.appendChild(tipoPokemon)
// contInfo.appendChild(tipoPokemon2)

nombrePokemon.innerHTML = data.name 
tipoPokemon.innerHTML = data.types[0].type.name 
// tipoPokemon2.innerHTML = data.types[1].type.name 
numPokemon.innerHTML = "#"+data.id.toString().padStart(3, "0") 
imgPokemon.setAttribute("src", data.sprites.front_default)
//ENGRANDAR IMAGEN

cartasPokemon.addEventListener("click", () => {
    btnSiguiente.remove()
    btnAtras.remove()
    nav.remove()
    body.remove()
    EngrandarInfo(data,data.id)

})

}

function interar() {
    for(let i = 1; i <= 52 ; i++) {
        llamarApi(i)
        }   
}
function EngrandarInfo(info,idPokemon) {
    const body = document.getElementById("pokedex")
    const fondo = document.createElement("div")
    const newCarts = document.createElement("div")
    const header = document.createElement("div")
    const contDatos = document.createElement("div")
    const newImg = document.createElement("img")
    const nombrePokemon = document.createElement("h2")
    //ASIGNANDO LOS ATRIBUTOS
    fondo.setAttribute("class", "contenedor fondo")
    newCarts.setAttribute("class", "contenedor newCarta")
    header.setAttribute("class", "contenedor header")
    contDatos.setAttribute("class", "contenedor contDato")
    newImg.setAttribute("class", "newImg")
    newImg.setAttribute("src", info.sprites.other.dream_world
    .front_default)

    nombrePokemon.setAttribute("class", "nombrePokemon")
    //ASIGNANDO HIJOs
    body.appendChild(fondo)
    fondo.appendChild(newCarts)
    newCarts.appendChild(header)
    header.appendChild(newImg)
    newCarts.appendChild(contDatos)
    contDatos.appendChild(nombrePokemon)






    llamarApi(idPokemon)
}

interar()


