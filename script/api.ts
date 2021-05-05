import { APIGeneratorBase } from 'api-code-generator';
import path from 'path';

new APIGeneratorBase({
    metadataEndpointURL: 'http://localhost:3000/v1/_api',
    typeFilePath: path.join(__dirname, '../src/type/api.ts'),
    serviceFolderPath: path.join(__dirname, '../src/util/service'),
    platformConfig: {
        ajaxFunction: (method, endpoint, requestParam, request) =>
            `ajax("${method}", "${endpoint}", {${requestParam}}, ${request});`,
        ajaxFunctionImportStatement: "import {ajax} from 'coil-react'",
        typeFileImportPath: 'type/api',
    },
}).run();
