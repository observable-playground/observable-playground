import { execute } from './../core/mock-delayed-execution';
import * as chartState from '../core/playground-api/state';
import { MAX_EXECUTION_TIME } from '../shared/consts';
import { compile } from './compiler';

export function run(sourceCode) {
    chartState.resetState();
    const execStatus = {}
    let execTime;
    try {
        const compiledFn = compile(sourceCode);
        const result = execute(compiledFn, MAX_EXECUTION_TIME);
        execTime = result.time;
        if (!result.status) {
            execStatus.isOk = true;
        } else {
            execStatus.isWarning = true;
            execStatus.warning = result.status;
        }
    } catch (err) {
        console.error(err);
        execTime = 0;
        execStatus.isError = true;
        execStatus.error = (err instanceof Error) ? err : new Error(err);
    }

    const { lines } = chartState.getState();

    return { time:   execTime
           , status: execStatus
           , lines
           };
}
