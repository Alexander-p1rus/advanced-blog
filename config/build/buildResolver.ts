import webpack from "webpack";

export function buildResolver():webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}