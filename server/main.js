const express = require('express')
const bodyParser = require("body-parser");
const UserDao = require('./dao/UserDao.js')

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    let body = req.body;

    UserDao.createBaseAccount({username: body.username, password: body.password},
        function(err, result) {
            if(err == null)
                res.send(result[0][0])
            else 
                res.send(err)
        })
    // if(body.username === "manfield" && body.password === "manfield") {
    //     res.send('credToken')
    // } else {
    //     res.send(401);
    // }


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})