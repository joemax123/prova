async function pokemon() {
    Pokemo = document.getElementById('poke').value
    Nome = document.getElementById('nome')
    img = document.getElementById('imagem')
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemo}`);
        const dados = await response.json();

        Nome.innerHTML = dados.forms[0].name
        img.src = dados.sprites.front_default
    } catch (error) {
        console.error(error)
    }
}