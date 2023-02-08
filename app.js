//TEXTO PARA EL HTML
let AreaTexto = `<div>
                    <input type="text" id="pais" placeholder="Busque el pais">
                    <button type="submit" id="enviar">enviar</button>
                    <p id="grados"></p>
                </div>`

//FUNCIONES DE LA APLICACION
function render(documentHtml, innerHTML) {
    documentHtml.innerHTML = innerHTML
}
async function apiTiempo (country){
    const apiId = '41d1d7f5c2475b3a16167b30bc4f265c';
    let res=  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiId}`)
    let Tiempo = await res.json();
    console.log(Tiempo);
    llenarDatos(Tiempo)
}
function BuscarPais() {
    let nombrePais = document.getElementById("pais").value;
    apiTiempo(nombrePais)
}
function llenarDatos(tiempo) {
    
}

render(document.getElementById("tiempo"), AreaTexto)


document.getElementById("enviar").addEventListener("click",()=>{
    BuscarPais()
})


