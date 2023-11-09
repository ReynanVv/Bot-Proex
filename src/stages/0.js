import { storage } from '../storage.js';
import { consultarMensagem } from '../consulta.js';

export const initialStage = {
    exec({ from }) {
        consultarMensagem((err, mensagem) => {
            if (err) {
                console.error(err);
                return;
            }
            storage[from].stage = 1
            console.log("\n----- Passou para o estagio 1 -----\n")
            return mensagem;
        });
    },
};