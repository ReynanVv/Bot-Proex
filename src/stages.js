import {
    initialStage,
    stageOne,
    stagePro,
    stageCursos,
    CondicaoTerminar,
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
];

export function getStage({ from }) {
    if (storage[from]) {
        return storage[from].stage;
    }
    storage[from] = {
        stage: 0
    };
    return storage[from].stage;
}