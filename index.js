const express = require('express')
const app = express()
const PORT = 5000

const home =  (req, res) => {
    res.send('Hello World!')
}

app.get('/', home)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})