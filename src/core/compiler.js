import * as Babel from '@babel/standalone/babel';
import { _require } from './playground-api/require';

const babelPipelinePlugin = require('@babel/plugin-proposal-pipeline-operator').default;

export const compile = (sourceCode) => {
    const plugins = [];
    const match = /^.*?proposal-pipeline-operator(\:((minimal)|(smart)|(fsharp)))?\s?\n/.exec(sourceCode);
    if (match) {
        const proposal = match[2] || 'minimal';
        if (proposal == 'fsharp') {
            console.warn('fsharp pipeline proposal is not well supported by this playground.')
        }
        plugins.push([babelPipelinePlugin, { proposal }]);
    }

    // currently it takes
    // ~20 ms to compile normal code
    // ~1-2 sec to compile errorneous code
    const transpiledSource = Babel.transform(sourceCode, {
        presets: ['es2017'],
        plugins
    }).code;

    // return a runable function with all requirements
    return () => {
        // eslint-disable-next-line no-new-func
        const fn = Function('require', transpiledSource);
        fn(_require);
    }
}
