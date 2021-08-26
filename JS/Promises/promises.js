function rand(min, max)
{
    return Math.floor(Math.random() *  (max - min) + min);
}

function esperaAi(msg, tempo)
{
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));
        setTimeout(() => {
            console.log(msg); 
        }, tempo);
        resolve(msg);
    }, tempo);
}

esperaAi('Conexão com o DB', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da BASE', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() =>{
        console.log('Exibe dados da tela');
    })
    .catch(e => {
        console.log('ERRO', e);
    });

    console.log("Começando Conexão");
