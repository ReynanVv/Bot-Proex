import { storage } from '../storage.js';

export const initialStage = {
    exec({ from }) {
        storage[from].stage = 1
        console.log("passando para o estagio 1")

        return "Olá, Espero que você esteja bem, sou o *assistente virtual* da Proex. *Posso te ajudar?*\nMenu Principal\n1️ - Programas e Projetos\n2 - Cursos e Eventos\nEscolha uma das opções.";
    },
};