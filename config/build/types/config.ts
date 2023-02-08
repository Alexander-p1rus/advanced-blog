export type BuildMode = 'production' | 'development'

export interface BuildPaths{
    entry:string,
    build:string,
    html:string
}

export interface BuildOptions{
    mode:BuildMode,
    path:BuildPaths,
    isDev:boolean,
    port:number
}

export interface BuildEnvironments{
    port:number,
    mode:BuildMode
}