const express = require("express")
const app = express();

app.get('/', (req, res) => {
    res.send("Listening on 7070")
})

app.listen(7070, () => {
    console.log("Listening on 7070")
})