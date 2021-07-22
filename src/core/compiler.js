import { _require } from './playground-api/require';

export function compile(sourceCode) {
    const transpiledSource = sourceCode;


    // return a runable function with all requirements
    return () => {
        // eslint-disable-next-line no-new-func
        const fn = Function('require', transpiledSource);
        fn(_require);
    }
}


// NOTE: babel compiling is temporary disabled cz it's not needed for most
// modern browsers
// function compileBabel() {
//     // currently it takes
//     // ~20 ms to compile normal code
//     // ~1-2 sec to compile errorneous code
//     import { transform } from '@babel/standalone/babel';
//     const transpiledSource = transform(sourceCode, {
//         presets: ['es2017'],
//     }).code;
// }