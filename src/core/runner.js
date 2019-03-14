import { execute } from './../core/mock-delayed-execution';
import * as chartState from '../core/playground-api/state';
import { MAX_EXECUTION_TIME } from '../shared/consts';
import { compile } from './compiler';

export const run = (sourceCode) => {
    chartState.resetState();
    let execStatus, execTime;
    try {
        const compiledFn = compile(sourceCode);
        let result = execute(compiledFn, MAX_EXECUTION_TIME);
        execStatus = result.status;
        execTime   = result.time;
    } catch (err) {
        console.error(err);
        if (err instanceof Error){
            execStatus = err;
        } else {
            execStatus = new Error(err);
        }

        execTime = 0;
    }

    const { lines } = chartState.getState();

    return { time:   execTime
           , status: execStatus
           , lines
           };
}
