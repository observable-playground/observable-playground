import * as Babel from '@babel/standalone/babel';
import { _require } from './playground-api/require';

export const compile = (sourceCode) => {
    // currently it takes
    // ~20 ms to compile normal code
    // ~1-2 sec to compile errorneous code
    const transpiledSource = Babel.transform(sourceCode, {
        presets: ['es2017']
    }).code;

    // return a runable function with all requirements
    return () => {
        // eslint-disable-next-line no-new-func
        const fn = Function('require', transpiledSource);
        fn(_require);
    }
}
