import { storage } from '../storage.js';

export const CondicaoFinanciamento = {
    exec({ from, message }) {
        if (message === '1' ){
            let msg = 'Recomendamos a leitura da Nota Informativa nº03/2023\n(Link da Nota Informativa: https://proex.ufra.edu.br/index.php?option=com_content&view=article&id=353:nota-informativa-n-03-2023-proex&catid=17&Itemid=121). Adicionalmente,\nrecomendamos que a proposta seja submetida após os últimos trâmites da\nformalização do contrato fundacional.\n'
            msg += '1 - Voltar ao Menu Principal\n2 - Encerrar Atendimento'
            storage[from].stage = 4
            return msg
        }
        if (message === '2') {
            let msg = 'A proposta poderá ser cadastrada e submetida para análise.'
            msg += '1 - Voltar ao Menu Principal\n2 - Encerrar Atendimento'
            storage[from].stage = 4
            return
        }
        if (message !== '1' || message !== '2') {
            let msg = "Opção inválida, tente novamente"
            storage[from].stage = 5
            console.log("\n----- Voltando para CondicaoFinanciamento -----\n")
            return msg
         }
    },
};