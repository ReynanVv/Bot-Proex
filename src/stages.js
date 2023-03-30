import {
    initialStage,
    stageOne,
    stagePro,
    finalStage,
} from './stages/index.js';

import { storage } from './storage.js';

export const stages = [
    {
        descricao: 'Welcome',
        stage: initialStage,
    },
    {
        descricao: 'Menu',
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
        descricao: 'Assistent',
        stage: finalStage,
    },
];

export function getStage({ from }) {
    if (storage[from]) {
        return storage[from].stage;
    }
    storage[from] = {
        stage: 0,
    };
    return storage[from].stage;
}