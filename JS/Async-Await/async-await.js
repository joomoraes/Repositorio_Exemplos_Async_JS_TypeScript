function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
 
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('CAI NO ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

async function executa()
{
    try {
        const fase1 = esperaAi('Fase 1', 1000);
        console.log(fase1);

        setTimeout(() => {
           console.log("Essa promise estava pendente", fase1) ;
        }, 1100);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase1);

        console.log('Terminamos na fase:' , fase3)
    } catch(e) {
        console.log(e);
    }

}
 executa();

 //Quando você manda executar -> pending
 //Resolvida -> Resolvida 
 //Rejected -> Rejeitada


