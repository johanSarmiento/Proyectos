const pokemos = fetch("https://pokeapi.co/api/v2/pokemon/")
.then(response => response.json())
.then(data => console.log(data))

pokemos.forEach(() => {
    
});