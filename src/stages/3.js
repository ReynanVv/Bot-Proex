import { storage } from '../storage.js';

export const stageCursos = {
    exec({ from, message }) {
        console.log("\n----- Dentro do estagio 3 -----\n")
        if (message === 'a') {
            let msg = 'Cadastro de Cursos e Eventos\n\n';
            msg += 'Para informações sobre o cadastro de Cursos e Eventos, *acesse*: https://proex.ufra.edu.br/index.php?option=com_content&view=article&id=119&Itemid=315\n'
            msg += 'Para ver um Passo a Passo em vídeo *acesse*: https://proex.ufra.edu.br/index.php?option=com_content&view=article&id=269&Itemid=376'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n';
            storage[from].stage = 0;

            return msg;
        }
        if (message === 'b') {
            let msg = 'Empréstimo de Material de Apoio\n\n';
            msg += 'Para informações e acesso ao formulario de solicitação de empréstimo de material, *acesse*: https://proex.ufra.edu.br/index.php?option=com_content&view=article&id=328&Itemid=423'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n';
            storage[from].stage = 0;

            return msg;
        }
        if (message === 'c') {
            let msg = 'Reserva dos Espaços Esportivos\n\n';
            msg += 'Para Informações sobre a Reserva de Espaço, *acesse*: https://proex.ufra.edu.br/index.php?option=com_content&view=article&id=124&Itemid=319'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n';
            storage[from].stage = 0;

            return msg;
        }
        if (message === 'd') {
            let msg = 'Programa Proex Comunidade\n\n';
            msg += 'Para Informações sobre o programa Proex Comunidade, *acesse*: https://proex.ufra.edu.br/index.php?option=com_content&view=article&id=329&Itemid=424'
            msg += '\nPara ir ao site da proex, *acesse*: https://proex.ufra.edu.br/\n\n';
            storage[from].stage = 0;

            return msg;
        }

        if (message !== 'a'|| message !== 'b'|| message !== 'c'|| message !=='d') {
            let msg = '❌ *Opção inválida, digite novamente!* \n\n';
            storage[from].stage = 3;
            return msg;
            
        }
    }
}