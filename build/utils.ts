import dotenv from "dotenv"
import fs from "fs"
import path from "path"

export function getEnvConfig(match:string = 'VITE_GLOB_', confFiles:string[] = ['.env', '.env.production']):EnvConfig{
    let envConfig = {};
    confFiles.forEach((item) => {
        try {
            const env = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), item)));
            envConfig = { ...envConfig, ...env };
        } catch (error) { }
    });

    Object.keys(envConfig).forEach((key) => {
        const reg = new RegExp(`^(${match})`);
        if (!reg.test(key)) {
            Reflect.deleteProperty(envConfig, key);
        }
    });
    return envConfig as EnvConfig;
}
