import {
    HardDrive,
    KeyRound,
    Layers3,
    List,
    PlusCircle,
    Server,
    SquarePen,
    Trash2,
} from 'lucide-react'

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista séries com api-key exposta.',
        color: "white",
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries renderizadas no SSR.',
        color: "orange",
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista séries salvas no sessionStorage.',
        color: "yellow",
        Icon: HardDrive,
    },
    {
        id: 4,
        method: 'FullStack',
        verb: 'Get',
        description: 'Lista séries via API Route - BackEnd Intermediário.',
        color: "green",
        Icon: Layers3,
    },
];

export const crud = [
    {
        id: 1,
        method: 'Create',
        verb: 'Post',
        description: 'Cria série via modal e API route',
        color: "red",
        Icon: PlusCircle,
    },
    {
        id: 2,
        method: 'Read',
        verb: 'Get',
        description: 'Lista séries via modal e API route',
        color: "blue",
        Icon: List,
    },
    {
    id: 3,
        method: 'Update',
        verb: 'Put',
        description: 'Atualiza série existente pelo id',
        color: 'pink',
        Icon: SquarePen,
    },
    {
        id: 4,
        method: 'Delete',
        verb: 'Delete',
        description: 'Exclui série existente pelo id',
        color: 'purple',
        Icon: Trash2,
    },
    
];