function rand(min, max)
{
    return Math.floor(Math.random() *  (max - min) + min);
}

function esperaAi(msg, tempo)
{
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        }
        resolve(msg.toUpperCase() + ' - Passei na Promise');
        return; 
    }, tempo);
}

//Promise.all Promise.race Promise.resolve Promise.reject

const promise = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(10000, rand(1, 5)),//Este tipo INT deve estourar um erro, caso seu rand de tempo seja
    // inferior aos demais outros dentro do array
];

Promise.race(promise)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });

