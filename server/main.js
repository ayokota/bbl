const express = require('express')
const bodyParser = require("body-parser");
const UserDao = require('./dao/UserDao.js');
const randomUtils = require('./utility/RandomUtils.js');
const emailService = require('./service/EmailService.js');
const { v4: uuidv4 } = require('uuid');

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
        let verification = randomUtils.generateVerificationCode()

        UserDao.signup(
            {
                username: email, 
                password: password,
                firstname: firstname,
                lastname: lastname,
                verification: verification
            },
            function(err, result) {
                if(err == null) {
                    emailService.sendVerificationCode(email, verification);
                    res.send(result[0][0])
                }
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

app.post('/verifyEmail', (req, res) => {
    let body = req.body;

    try {
        let username = body.username
        let verificationCode = body.verificationCode

        UserDao.verifyEmail(
            {
                username: username,
                verificationCode: verificationCode
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

app.get('/resendVerificationCode/:email', (req, res) => {
    let params = req.params;

    try {
        UserDao.query(`SELECT verification FROM users u WHERE u.email = '${params.email}'`, function(err, result) { 
            if(err == null) {

                let verificationCode = result[0].verification
                if(verificationCode !== '') {
                    emailService.sendVerificationCode(params.email, verificationCode);
                    res.send({
                        verified: false,
                        code: verificationCode
                    })
                } else {
                    res.send({
                        verified: true
                    })
                }
            }
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

app.get('/forgotPassword/:email', (req, res) => {
    let params = req.params;

    try {
        let uuid = uuidv4();

        UserDao.query(`UPDATE users set reset_code = '${uuid}' WHERE email = '${params.email}'`, function(err, result) { 
            if(err == null) {
                emailService.sendResetPasswordCode(params.email, uuid);
                res.status(201).send()
            }
            else  {
                res.status(500)
                .send(err)
            }
        })


    } catch(err) {
        console.log(err);
        res.status(500)
            .send(err)
    }
})

app.post('/updatePassword', (req, res) => {
    let body = req.body;

    try {
        let uuid = body.uuid
        let password = body.password

        if(uuid === "") {
            res.status(500)
                    .send("uuid cannot be empty")
        }

        UserDao.updatePassword({uuid: uuid, password: password},
            function(err, result) {
                if(err == null)
                    res.send(result[0][0])
                else  {
                    res.status(500)
                    .send(err)
                }
            })
    } catch(err) {
        console.log(err);
        res.status(500)
            .send(err)
    }
})

app.get('/ping', (req, res) => {
    res.send("OK")

})


app.listen(port, () => {
  console.log(`BBL server app listening at http://localhost:${port}`)
})