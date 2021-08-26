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
        resolve(msg);
        return; 
    }, tempo);
}

//Promise.all Promise.race Promise.resolve Promise.reject

function baixaPagina() {
    const emCache = true;

    if(emCache)
    {
        return Promise.reject('Pagina em Cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e));
