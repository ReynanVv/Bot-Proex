import { storage } from '../storage.js';

export const stagePro = {
    exec({ from, message }) {
        console.log("Dentro do estagio 2")
        if (message === 'a') {
            let msg = '\n';
            msg += 'Cadastro de programa e projeto\n'
            msg += 'Para ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';
            msg += 'Opções\n'
            msg += '1 - Voltar ao Menu Principal\n2 - Voltar para Opções de Programas e Projetos'
            
            storage[from].stage = 4;
            return msg;
        }
        if (message === 'b') {
            let msg = '\n';
            msg += 'Encerramento de programa e projeto\n'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';
            storage[from].stage = 0;

            return msg;
        }
        if (message === 'c') {
            let msg = '\n';
            msg += 'Para informações sobre Treinamentos em programas e projetos, *acesse*: https://proex.ufra.edu.br/index.php?option=com_content&view=article&id=317&Itemid=422\n'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';
            storage[from].stage = 0;

            return msg;
        }
        if (message === 'd') {
            let msg = '\n';
            msg += 'Outros\n'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';
            storage[from].stage = 0;

            return msg;
        }

        if (message !== 'a'|| message !== 'b'|| message !== 'c'|| message !=='d') {
            let msg = '❌ *Opção inválida, digite novamente!* \n\n';
            storage[from].stage = 2;
            return msg;
            
        }
    }
}