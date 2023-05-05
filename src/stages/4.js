import { storage } from '../storage.js';

export const CondicaoTerminar = {
    exec({ from, message }) {
        if (message === '1' ){
            storage[from].stage = 0
            return
        }
        if (message === '2') {
            storage[from].stage = 1
            return
        }
        if (message !== '1' || message !== '2') {
            let msg = "Opção inválida, tente novamente"
            storage[from].stage = 4
            console.log("\n----- Voltando para CondicaoTerminar -----\n")
            return msg
         }
    },
};