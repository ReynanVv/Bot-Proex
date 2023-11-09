import { con } from './server.js';

const consultarMensagem = (callback) => {
    con.query('SELECT mensagem FROM mensagens WHERE id=1', (err, rows) => {
        if (err) return callback(err);

        const mensagem = rows[0].mensagem;
        callback(null, mensagem);
    });
};

export { consultarMensagem };