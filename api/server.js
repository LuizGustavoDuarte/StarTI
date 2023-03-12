app = require('express')()

app.get('/image', (req,res) => res.sendFile(__dirname + '/images/' + Math.floor(Math.random() * 5 + 1) + '.jpg'))


app.listen(3001, () => console.log('ouvindo'));