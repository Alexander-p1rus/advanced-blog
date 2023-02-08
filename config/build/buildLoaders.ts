import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const {isDev} = options

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader:"css-loader",
                options:{
                    modules:{
                        auto:/\.module\./,
                        localIdentName:isDev
                            ? "[path][name]__[local]"
                            :"[hash:base64:8]"
                    }
                }
            },
            "sass-loader",
        ],
    }


    return [
        typescriptLoader, sassLoader
    ]
}