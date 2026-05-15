async function paises() {
    pais = document.getElementById('pais').value
    Nome = document.getElementById('nome')
    img = document.getElementById('imagem')
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${pais}`);
        const dados = await response.json();

        Nome.innerHTML = dados.forms[0].name
        img.src = dados.sprites.front_default
    } catch (error) {
        console.error(error)
    }
}