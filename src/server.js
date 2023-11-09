import { create } from 'venom-bot';
import { stages, getStage } from './stages.js';
import { criarConexao } from './conexao.js';

const con = criarConexao();
con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})
export { con };

create({
    session: 'store',
    multidevice: true,
    headless: false,
})
    .then((client) => start(client))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
    
    
function start(client) {
    console.log("\n----- Conectou -----\n")
    client.onMessage((message) => {
        if (message) {
            console.log('\n-----'+message.from+'-----\n')
            console.log("\n----- Entrou no if -----\n")
            const currentStage = getStage({ from: message.from });
            const messageResponse = stages[currentStage].stage.exec({
                from: message.from,
                message: message.body,
                client,
            });

            if (messageResponse) {
                client.sendText(message.from, messageResponse).then(() => {
                    console.log('\nMensagem enviada.\n');
                }).catch(error => console.error('Error when sending message', error));
            }
        }
    });
};