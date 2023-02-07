// for(let i = 0; i < 100; i++){
//     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//     .then(response => response.json())
//     .then(data => console.log(data.name))
// }

let arreglo = ["johan","maria","miguel","kevin","jose"]
// let body = document.getElementById("ejemplo")
// const nombre = document.createElement("p")
// body.appendChild(nombre)
// nombre.textContent= "hola"
for(let nombre of arreglo){
    document.getElementById("ejemplo").innerHTML = nombre
}