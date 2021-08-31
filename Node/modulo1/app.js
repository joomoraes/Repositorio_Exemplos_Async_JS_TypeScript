const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Jão');
console.log(p1);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))
