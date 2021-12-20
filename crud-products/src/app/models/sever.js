/**
 * 
 * Arquivo: server
 * Descrição:
 * Author
 * Data de criação: 19/12/2021
 * 
 */
//Configurar o Setup da App:

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())