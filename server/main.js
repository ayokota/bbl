const express = require('express')
const bodyParser = require("body-parser");
const UserDao = require('./dao/UserDao.js')
var cors = require('cors')

const app = express()
const port = 3001


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    let body = req.body;

    try {
        UserDao.authenticate({username: body.username, password: body.password},
            function(err, result) {
                if(err == null)
                    res.send(result[0][0])
                else  {
                    res.status(500)
                    .send(err)
                }
            })
    } catch(err) {
        res.status(500)
            .send(err)
    }
})

app.post('/signup', (req, res) => {
    let body = req.body;

    try {
        let email = body.username
        let password = body.password
        let firstname = body.firstname
        let lastname = body.lastname

        UserDao.signup(
            {
                username: body.username, 
                password: body.password,
                firstname: firstname,
                lastname: lastname
            },
            function(err, result) {
                if(err == null)
                    res.send(result[0][0])
                else  {
                    res.status(500)
                    .send(err)
                }
            })
    } catch(err) {
        res.status(500)
            .send(err)
    }
})

app.get('/ping', (req, res) => {
    res.send("OK")

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})