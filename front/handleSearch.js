let input = document.querySelector("#inputech")
let botao = document.querySelector("#botao")


botao.addEventListener('click', () => {
    fetch('http://localhost:3001/tecnologia/' + input.value).then(resp => resp.json()).then(response => {

        document.querySelector('#tecnologia').innerHTML += '<h1>Por favor use: '+ response.titulo + '</h1> <p> sua nota é ' + response.media + ' com ' + response.quantidadeAval + ' avaliações</p><br>Qual é sua avaliacao?<br><a onclick="Avaliar(1)"><img  src="star-svgrepo-com.svg" height="40px" width="40px"></img></a><a onclick="Avaliar(2)"><img  src="star-svgrepo-com.svg" height="40px" width="40px"></img></a><a onclick="Avaliar(3)"><img  src="star-svgrepo-com.svg" height="40px" width="40px"></img></a><a onclick="Avaliar(4)"><img  src="star-svgrepo-com.svg" height="40px" width="40px"></img></a><a onclick="Avaliar(5)"><img  src="star-svgrepo-com.svg" height="40px" width="40px"></img></a>';
    })
})

function Avaliar(avaliacao){
    let dados = {media: avaliacao}
    fetch('http://localhost:3001/tecnologia/' + input.value, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }).then(resp => resp.json()).then(console.log("Funfou"))
}