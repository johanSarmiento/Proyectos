const body = document.getElementById("cartas")
const cartasPokemon = document.createElement("div")
const contImg = document.createElement("div")
const contInfo = document.createElement("div")
const imgPokemon = document.createElement("img")
const nombrePokemon = document.createElement("h2")
const tipoPokemon = document.createElement("p")
const numPokemon = document.createElement("p")
//ASIGNANDO LOS ATRIBUTOS
cartasPokemon.setAttribute("class", "contenedor cartas")
contImg.setAttribute("class", "contenedor contImg")
contInfo.setAttribute("class", "contenedor contInfo")
imgPokemon.setAttribute("class", "imgPokemon")
nombrePokemon.setAttribute("class", "nombrePokemon")
tipoPokemon.setAttribute("class", "tipoPokemon")
numPokemon.setAttribute("class", "numPokemon")
//ASIGNANDO HIJOS
body.appendChild(cartasPokemon)
cartasPokemon.appendChild(contImg)
cartasPokemon.appendChild(contInfo) 
contImg.appendChild(imgPokemon)
contInfo.appendChild(nombrePokemon)
contInfo.appendChild(tipoPokemon)
contInfo.appendChild(numPokemon)

async function llamarApi(id) {
    let api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let pokemos = await api.json()
    console.log(pokemos);
    llenarCarta(pokemos)
}
function llenarCarta(data) {
    nombrePokemon.innerHTML = data.name
    tipoPokemon.innerHTML = data.types[0].type.name
    tipoPokemon.innerHTML = data.types[1].type.name
    numPokemon.innerHTML = data.id
}
llamarApi(2)