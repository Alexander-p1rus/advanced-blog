
import  path from "path";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnvironments, BuildPaths} from "./config/build/types/config";


export default (env:BuildEnvironments)=>{
    const paths:BuildPaths={
        entry:path.resolve(__dirname,'src','index.tsx'),
        build:path.resolve(__dirname,'build'),
        html:path.resolve(__dirname,'public','index.html')
    }

    const port=env.port || 3000
    const mode=env.mode || 'production'
    const isDev=env.mode==='development'

    const config=buildWebpackConfig({
        mode,
        path:paths,
        isDev,
        port
    })

    return config
}