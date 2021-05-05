import { WebpackRunner } from '@iamyth/webpack-runner';
import path from 'path';
import yargs from 'yargs';

const env = yargs.argv.env ?? 'dev';

new WebpackRunner({
    projectDirectory: path.join(__dirname, '..'),
    port: 8080,
    tsconfigFilePath: path.join(__dirname, '../config/tsconfig.src.json'),
    apiProxy: {
        target: env === 'dev' ? 'http://localhost:3000' : 'https://eatwhatgood.jamyth.com',
        context: ['/v1'],
    },
}).run();
