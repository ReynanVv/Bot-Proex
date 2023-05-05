import {
    initialStage,
    stageOne,
    stagePro,
    stageCursos,
    CondicaoTerminar,
    CondicaoFinanciamento,
    CondicaoDeInicio,
} from './stages/index.js';

import { storage } from './storage.js';

export const stages = [
    {
        descricao: 'Menu',
        stage: initialStage,
    },
    {
        descricao: 'Menu das Opções',
        stage: stageOne,
    },
    {
        descricao: 'Programas e Projetos',
        stage: stagePro,
    },
    {
        descricao: 'Cursos e Eventos',
        stage: stageCursos,
    },
    {
        descricao: 'Condicao para Terminar',
        stage: CondicaoTerminar,
    },
    {
        descricao: 'Condicao para Financiamento',
        stage: CondicaoFinanciamento,
    },
    {
        descricao: 'Condicao de Inicio',
        stage: CondicaoDeInicio,
    },
];

export function getStage({ from }) {
    if (storage[from]) {
        return storage[from].stage;
    }
    storage[from] = {
        stage: 6
    };
    console.log("\n----- Na Condição de inicio -----\n")
    return storage[from].stage;
}