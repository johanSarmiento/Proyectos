// const fs = require("fs")
// const json = fs.readFileSync("preguntas.json").toString();
// const preguntas = JSON.parse(json)
// console.log(preguntas)


// const myjson = `[
//     {
//         "preguntaUno" : "¿en que año se descrubrio america?",
//         "RespuestaUno" : "1492",
//         "RespuestaDos" : "1492",
//         "RespuestaTres" : "1492",
//         "RespuestaCuatro" : "1492",
//         "RespuestaCorect" : "RespuestaUno"
//     },

//     {
//         "preguntaUno" : "¿Rio mas largo del mundo?",
//         "RespuestaUno" : "Rio negro",
//         "RespuestaDos" : "Rio nilo",
//         "RespuestaTres" : "Rio de mi casa",
//         "RespuestaCuatro" : "Rio amazonas",
//         "RespuestaCorect" : "RespuestaCuatro"
//     },

//     {
//         "preguntaUno" : "¿Cuanto vale PI?",
//         "RespuestaUno" : "3.1417",
//         "RespuestaDos" : "3.1416",
//         "RespuestaTres" : "3.1415",
//         "RespuestaCuatro" : "3.1614",
//         "RespuestaCorect" : "RespuestaDos"
//     },

//     {
//         "preguntaUno" : "¿?",
//         "RespuestaUno" : "1492",
//         "RespuestaDos" : "1492",
//         "RespuestaTres" : "1492",
//         "RespuestaCuatro" : "1492",
//         "RespuestaCorect" : "RespuestaUno"
//     },
//     {
//         "preguntaUno" : "¿Hammer es buena persona?",
//         "RespuestaUno" : "si, muy buena persona",
//         "RespuestaDos" : "Definamos 'buena persona' ",
//         "RespuestaTres" : "no",
//         "RespuestaCuatro" : "Tal vez",
//         "RespuestaCorect" : "RespuestaDos"
//     }
// ]`
// const preguntas = JSON.parse(myjson)
// console.log(preguntas);

import * as module from './preguntas.json' assert {type : 'json'}

console.log(preguntas.preguntaUno);