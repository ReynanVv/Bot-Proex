import { storage } from '../storage.js';

export const initialStage = {
    exec({ from }) {
        let msg = "Olá, Espero que você esteja bem, sou o *assistente virtual* da Proex. *Posso te ajudar?*\n\n*Menu Principal*\n```1️ - Programas e Projetos```\n```2 - Cursos e Eventos```\nEscolha uma das opções.";
        storage[from].stage = 1
        console.log("\n----- Passou para o estagio 1 -----\n")

        return msg 
    },
};