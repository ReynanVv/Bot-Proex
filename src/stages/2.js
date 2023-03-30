import { storage } from '../storage.js';

export const stageTwo = {
    exec({ from, message }) {
        if (message === 'a') {
            let msg = '🚨  Sua Escolha  🚨\n\n';
            msg += 'Cadastro de programa e projeto\n'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';
            storage[from].stage = 0;

            return msg;
        }
        if (message === 'b') {
            let msg = '🚨  Sua Escolha  🚨\n\n';
            msg += 'Encerramento de programa e projeto\n'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';
            storage[from].stage = 0;

            return msg;
        }
        if (message === 'c') {
            let msg = '🚨  Sua Escolha  🚨\n\n';
            msg += 'Para informações sobre Treinamentos em programas e projetos, *acesse*: https://proex.ufra.edu.br/index.php?option=com_content&view=article&id=317&Itemid=422\n'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';
            storage[from].stage = 0;

            return msg;
        }
        if (message === 'd') {
            let msg = '🚨  Sua Escolha  🚨\n\n';
            msg += 'Outros\n'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';
            storage[from].stage = 0;

            return msg;
        }

        if (message !== 'a'||'b'||'c'||'d') {
            let msg = '❌ *Código inválido, digite novamente!* \n\n';
            storage[from].stage = 2;
            return msg;
            
        }
    }
}