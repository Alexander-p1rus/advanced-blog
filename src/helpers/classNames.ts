type Mode = Record<string, string | boolean>

const mem={
    name:'sasha',
    age:3
}

export function classNames(cls: string, mods: Mode, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([key, value]) => !!value)
            .map(([key]) => key)
    ].join(' ')
}