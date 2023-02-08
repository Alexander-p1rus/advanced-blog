import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";

export function buildDevServer(options:BuildOptions):DevServerConfiguration{
    return {
        port:options.port,
        open:true,
        hot:true,
        historyApiFallback: true,
    }
}