import { storage } from '../storage.js';

export const CondicaoTerminar = {
    exec({ from, message }) {
        if (message === '1' ){
            storage[from].stage = 0
            let msg = "Olá, Espero que você esteja bem, sou o *assistente virtual* da Proex. *Posso te ajudar?*\n\n*Menu Principal*\n```1 - Programas e Projetos```\n```2 - Cursos e Eventos```\nEscolha uma das opções.";
            return msg
        }
        if (message === '2') {
            let msg = "Espero ter ajudado, até a próxima."
            storage[from].stage = 0
            return msg
        }
        if (message !== '1' || message !== '2') {
            let msg = "Opção inválida, tente novamente"
            storage[from].stage = 4
            console.log("\n----- Voltando para CondicaoTerminar -----\n")
            return msg
         }
    },
};