async function rickmorty(){
    personagem = document.getElementById('personagem').value
    Nome = document.getElementById('nome')
    img = document.getElementById('imagem')
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${personagem}`);
        const dados = await response.json();

        Nome.innerHTML = dados.results.name
        img.src = dados.results.image
    }catch (error) {
        console.error(error)
    }
}