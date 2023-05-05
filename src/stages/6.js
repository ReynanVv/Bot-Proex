import { storage } from '../storage.js';

export const CondicaoDeInicio = {
    exec({ from, message }) {
        if (message === 'Start' ){
            storage[from].stage = 0
            console.log("\n----- Indo para o Estágio Inicial -----\n")
            return
        }
    },
};