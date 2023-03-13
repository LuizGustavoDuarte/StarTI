let app = require('express')()
let cors = require('cors')

app.use(cors())

app.get('/image', (req,res) => res.sendFile(__dirname + '/images/' + Math.floor(Math.random() * 5 + 1) + '.jpg'))

app.get('/tecnologia/:tecnologia', (req,res) => {
    console.log('socorro aaaaaaaaaaa')
    res.send({
        titulo: req.params.tecnologia,
        quantidadeAval: 10,
        media: 3
    })
})


app.listen(3001, () => console.log('ouvindo'));