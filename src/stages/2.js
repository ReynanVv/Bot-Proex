import { storage } from '../storage.js';

export const stagePro = {
    exec({ from, message }) {
        console.log("\n------ Dentro do estagio 2 ------\n")
        if (message === 'a') {
            let msg = 'A Submissão de Propostas de Programas e Projetos de Extensão poderá ser feita ';
            msg += 'a qualquer momento via Módulo de Extensão por servidores da UFRA e coordenados por eles em conformidade com o art. 19 da Resolução nº 248/2015 - CONSEPE.'
            msg += 'que pode ser acessado no link: https://proex.ufra.edu.br/images/documentos/consepe_resolucao_n248_de_12_de_maro_2015_.pdf\n'
            msg += 'Recomendamos que a proposta seja cadastrada via unidade de lotação do servidor.'
            msg += 'Em nosso site estão disponíveis dois manuais sobre a utilização do Módulo de Extensão.\n'
            msg += 'Manual para Técnico Administrativo: https://proex.ufra.edu.br/images/Manual%201%20do%20TAE%20-%20Acesso%20ao%20M%C3%B3dulo%20de%20Extens%C3%A3o.pdf\n'
            msg += 'Manual para Docente: https://proex.ufra.edu.br/images/Manual%201%20do%20Docente%20-%20Acesso%20ao%20M%C3%B3dulo%20de%20Extens%C3%A3o.pdf\n'
            msg += 'A proposta de Programas ou Projetos de Extensão submetida pelo(a) servidor(a) seguirá o seguinte fluxo\n'
            msg += '1º - Status: Aguardando a Aprovação dos departamentos. Neste status, a proposta está\n'
            msg += 'pendente de aprovação das chefias imediatas dos servidores envolvidos e adicionados na\n'
            msg += 'equipe da proposta de ação de extensão. Recomendamos que os servidores envolvidos\n'
            msg += 'na proposta procurem suas chefias imediatas para solicitar a autorização para participar\nna ação de extensão em questão.\n\n'
            msg += '2º - Status: Submetida. Neste status, todos os servidores foram autorizados a participar\n'
            msg += 'da proposta de ação de extensão. A proposta está submetida à PROEX para análise\n'
            msg += 'e parecer. Trabalhamos com um prazo de 20 a 30 dias para dar o parecer quanto à\n'
            msg += 'proposta submetida. O servidor receberá em seu e-mail um relatório técnico contendo as\n'
            msg += 'informações sobre a análise e as recomendações feitas pela equipe da PROEX.\n\n'
            msg += '3º - Status: Proposta Devolvida para o coordenador reeditar. Nesse status, algumas propostas serão devolvidas para o(a) coordenador(a) reeditar para adequações.\n'
            msg += 'Recomendamos a leitura do item 5 dos manuais (Manual para Técnico Administrativo ou Manual para Docente)\n\n'
            msg += '4º - Status: Proposta Devolvida para o presidente. Neste status, a proposta foi devolvida para a reavaliação da PROEX. Equivale ao status submetido.\n\n'
            msg += '5º - Status: Não Aprovada. Neste status, a proposta não atendeu aos requisitos estabelecidos na Resolução nº 248/2015 - CONSEPE (Link da resolução: https://proex.ufra.edu.br/images/documentos/consepe_resolucao_n248_de_12_de_maro_2015_.pdf).\n'
            msg += 'O servidor receberá em seu e-mail um relatório técnico contendo as informações sobre a análise.\n\n'
            msg += '6º - Status: Em execução. Neste status, a proposta atendeu aos requisitos estabelecidos na Resolução nº 248/2015 - CONSEPE e será registrada no Módulo de Extensão - SIGAA.\n'
            msg += 'O servidor receberá em seu e-mail um relatório técnico contendo as informações sobre a análise.\n\n'
            msg += 'A proposta submetida possui Financiamento Externo?\n1- SIM  || 2 - NÃO ( Envie o número da Opção )' 
            
            
            storage[from].stage = 5;
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
            let msg = '*Opção inválida, digite novamente!* \n\n';
            storage[from].stage = 2;
            return msg;
            
        }
    }
}