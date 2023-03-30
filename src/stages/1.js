import { storage } from '../storage.js';

export const stageOne = {
    exec({ from, message, client }) {
        if (message === '1') {
            let msg = '🚨  Programas e Projetos  🚨\n\n';
            msg += '*a)* Cadastro de programa e projeto\n*b)* Encerramento de programa e projeto\n*c)* Treinamentos em programas e projetos'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';
            storage[from].stage = 2;

            return msg;
        }
        if (message === '2') {
            let msg = '🚨  Cursos e Eventos  🚨\n\n';
            msg += '*a)* Cadastro de Cursos e Eventos\n*b)* Empréstimo de Material de Apoio\n*c)* Reserva dos Espaços Esportivos\n*d)* Programa Proex Comunidade'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';
            storage[from].stage = 3;

            return msg;
        }
    }
}