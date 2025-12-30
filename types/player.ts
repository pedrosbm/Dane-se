type Player = {
    nome: string,
    color: {
        value: string,
        contrast: string
    },
    pontos: number,
    aposta: number,
    scored: boolean
}

export type { Player };