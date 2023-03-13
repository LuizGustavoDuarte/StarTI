let input = document.querySelector("#inputech")
let botao = document.querySelector("#botao")


botao.addEventListener('click', () => {
    fetch('http://localhost:3001/tecnologia/' + input.value).then(resp => resp.json()).then(response => {

        document.querySelector('#tecnologia').innerHTML += '<h1>Por favor use: '+ response.titulo + '</h1> <p> sua nota é ' + response.media + ' com ' + response.quantidadeAval + ' avaliações</p>';

    })
})