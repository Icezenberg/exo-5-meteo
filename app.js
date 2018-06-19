const express = require('express');
const app = express();

/**
 * Route statique vers dossier public
 */
app.use(express.static('public'))

/**
 * Route vers Index.html
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Index.html');
})


/**
 * Route vers appel API météo 
 */
app.get('/meteo/reunion', function (req, res) {
    const request = require('request');
    let apiKey = '603c0ea85d80355eb314df67b9208363';
    let city = 'reunion';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            // var weather = JSON.parse(body)
            console.log('body:', body);
        }
        res.send(response)
    });
})


app.get('/meteo/paris', function (req, res) {
    const request = require('request');
    let apiKey = '603c0ea85d80355eb314df67b9208363';
    let city = 'paris';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            // var weather = JSON.parse(body)
            console.log('body:', body);
        }
        res.send(response)
    });
});

app.get('/meteo/marseille', function (req, res) {
    const request = require('request');
    let apiKey = '603c0ea85d80355eb314df67b9208363';
    let city = 'marseille';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            // var weather = JSON.parse(body)
            console.log('body:', body);
        }
        res.send(response)
    });
});

app.get('/meteo/moscou', function (req, res) {
    const request = require('request');
    let apiKey = '603c0ea85d80355eb314df67b9208363';
    let city = 'moscou';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            // var weather = JSON.parse(body)
            console.log('body:', body);
        }
        res.send(response)
    });
});






/**
 * Port d'écoute
 */
app.listen(3099, function () { console.log("Listening on port 3099") });
