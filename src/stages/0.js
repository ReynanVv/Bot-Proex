import { storage } from '../storage.js';

export const initialStage = {
    exec({ from }) {
        storage[from].stage = 1;

        return '👋 Olá, Espero que você esteja bem \n\n,sou o *assistente virtual* da Proex. \n*Posso te ajudar?* 🙋‍♂️ \n---------------------------------\n```1️``` - ```Programas e Projetos```\n 2 - ```Cursos e Eventos```\n 3 - ```Produtos e Prestação de serviços```\n 4- ```PIBEX```\n 5- ```Estágio Não Obrigatório```\n\nEscolha uma das Opções'; 
    },
};