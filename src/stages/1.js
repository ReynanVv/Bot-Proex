import { storage } from '../storage.js';

export const stageOne = {
    exec({ from, message }) {
        console.log("\n----- No estagio 1 -----\n")
        if (message === '1') {
            console.log("\n----- Entrou no if da Opcao 1 -----\n")
            storage[from].stage = 2;
            console.log("\nPassou para o estagio 2\n")
            let msg = '*Programas e Projetos*\n\n';
            msg += '*a)* Cadastro de programa e projeto\n*b)* Encerramento de programa e projeto\n*c)* Treinamentos em programas e projetos'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';

            return msg;
        }
        if (message === '2') {
            console.log("\nEntrou no if da Opcao 2\n")
            storage[from].stage = 3;
            console.log("\n----- Passou para o estagio 3 -----\n")
            let msg = '*Cursos e Eventos*\n\n';
            msg += '*a)* Cadastro de Cursos e Eventos\n*b)* Empréstimo de Material de Apoio\n*c)* Reserva dos Espaços Esportivos\n*d)* Programa Proex Comunidade'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` \n*Digite a OPÇÃO ao qual deseja:*';

            return msg;
        }
        if (message !== '1' || message !== '2'){
            let msg = "Opção invalida, tente novamente";
            storage[from].stage = 1
            console.log("\n---- Voltando para o estagio 1 -----\n")
            return msg
        }
    }
}