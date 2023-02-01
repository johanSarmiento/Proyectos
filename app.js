
import Api from './preguntas.json' assert { type: 'json' };
console.log(typeof Api);
//CREANDO ELEMENTOS 
const Body = document.querySelector('body');
const contenedorQuiz = document.createElement('div');
const Quiz = document.createElement('div');
const contPreguntas  = document.createElement('div');
const ContRespuesta = document.createElement('div');
const preguntas = document.createElement('h2'); 
const respuestaUno = document.createElement('button');
const respuestaDos = document.createElement('button');
const respuestaTres = document.createElement('button');
const respuestaCuatro = document.createElement('button');

//asignando clases
contenedorQuiz.setAttribute('class','Contenedor');
Quiz.setAttribute('class','Contenedor Quiz');
preguntas.setAttribute('class','Preguntas');
ContRespuesta.setAttribute('class','Contenedor contRespuesta');
contPreguntas.setAttribute('class','Contenedor contPreguntas');
respuestaUno.setAttribute('class','btn btnPreguntaUno');
respuestaDos.setAttribute('class','btn btnPreguntaDos');
respuestaTres.setAttribute('class','btn btnPreguntaDos');
respuestaCuatro.setAttribute('class','btn btnPreguntaDos');

// AGREGAR HIJOS
Body.appendChild(contenedorQuiz);
contenedorQuiz.appendChild(Quiz);
Quiz.appendChild(contPreguntas);
Quiz.appendChild(ContRespuesta);
contPreguntas.appendChild(preguntas);
ContRespuesta.appendChild(respuestaUno);
ContRespuesta.appendChild(respuestaDos);
ContRespuesta.appendChild(respuestaTres);
ContRespuesta.appendChild(respuestaCuatro);
//AGREGAR TEXTOS



//FUNCIONAES
let posicion=0 , contCorrectas=0

function llenarPrguntas (api) {
    if (posicion<=(api.length+1)) {
        preguntas.innerHTML = api[posicion].preguntaUno 
        respuestaUno.innerHTML = api[posicion].RespuestaUno
        respuestaDos.innerHTML = api[posicion].RespuestaDos
        respuestaTres.innerHTML = api[posicion].RespuestaTres
        respuestaCuatro.innerHTML = api[posicion].RespuestaCuatro 
    }
    console.log(posicion);
    console.log(api.length-1);
}

function Respuestas(api) {
    respuestaUno.addEventListener("click",()=>{
        if (api[posicion].RespuestaCorect == api[posicion].RespuestaUno) {
            alert(api[posicion].RespuestaCorect)
            contCorrectas++
        }
        posicion++
        Resultado( contCorrectas , Api,posicion)
        llenarPrguntas(Api);
    })
    respuestaDos.addEventListener("click",()=>{
        if (api[posicion].RespuestaCorect == api[posicion].RespuestaDos) {
            alert(api[posicion].RespuestaCorect)
            contCorrectas++
        }
        posicion++
        Resultado( contCorrectas , Api,posicion)
        llenarPrguntas(Api);
    })
    respuestaTres.addEventListener("click",()=>{
        if (api[posicion].RespuestaCorect == api[posicion].RespuestaTres) {
            alert(api[posicion].RespuestaCorect)
            contCorrectas++
        }
        posicion++
        Resultado( contCorrectas , Api,posicion)
        llenarPrguntas(Api);
    })
    respuestaCuatro.addEventListener("click",()=>{
        if (api[posicion].RespuestaCorect == api[posicion].RespuestaCuatro) {
            alert(api[posicion].RespuestaCorect)
            contCorrectas++
        }
        posicion++
        Resultado( contCorrectas , Api, posicion)
        llenarPrguntas(Api);
    })
}
function Resultado( contador, api,posicion) {
    if (posicion===(api.length)) {
        const contResult = document.createElement("div")
        contResult.setAttribute("class","Contenedor contResult")
        const result = document.createElement("p")
        const frase = document.createElement("p")
        result.setAttribute("class","result")
        frase.setAttribute("class","frase")
        contenedorQuiz.removeChild(Quiz)
        contenedorQuiz.appendChild(contResult)
        contResult.appendChild(result)
        contResult.appendChild(frase)
        result.innerHTML = "TU RESULTADO ES: "+ contador +"/"+api.length 
        if (contador<(api.length/2)) {
            frase.innerHTML = "vaya y duerma pirobo"
        }else if (contador===(api.length/2)) {
            frase.innerHTML = "mehhh, ni tan bien, ni tan mal"
        }else if(contador===api.length){
            frase.innerHTML = "muy bien amigazo amiguito amigo genio crack ídolo titán bestia rey capitán de navío capitán de corbe facha superhéroe locura guerrero toro gladiador pantera que tenga un excelente dia   "
        }
       
    }
}

Respuestas(Api)
llenarPrguntas(Api); 







