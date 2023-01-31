
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
const enviar = document.createElement('button');

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
enviar.setAttribute('class','btn btnEnviar');

// AGREGAR HIJOS
Body.appendChild(contenedorQuiz);
contenedorQuiz.appendChild(Quiz);
Quiz.appendChild(contPreguntas);
Quiz.appendChild(ContRespuesta);
Quiz.appendChild(enviar);
contPreguntas.appendChild(preguntas);
ContRespuesta.appendChild(respuestaUno);
ContRespuesta.appendChild(respuestaDos);
ContRespuesta.appendChild(respuestaTres);
ContRespuesta.appendChild(respuestaCuatro);
//AGREGAR TEXTOS
enviar.textContent = "Siguiente"



//FUNCIONAES
let posicion=0

function llenarPrguntas (api) {
    if (posicion<=api.length) {
        enviar.addEventListener("click",()=>{posicion++
        preguntas.innerHTML = api[posicion].preguntaUno 
        respuestaUno.innerHTML = api[posicion].RespuestaUno
        respuestaDos.innerHTML = api[posicion].RespuestaDos
        respuestaTres.innerHTML = api[posicion].RespuestaTres
        respuestaCuatro.innerHTML = api[posicion].RespuestaCuatro
        })   
    }
    console.log(posicion);
}

llenarPrguntas(Api);







