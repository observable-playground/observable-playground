export const createApi = ()=>{
    const state = {
        lines: []
    };

    const createLine = ()=>{
        const line = {
            start: Date.now(),
            end: undefined,
            events: [],
            errors: [],
            stops:  [],
        };

        state.lines.push(line);

        const onEvent = value => {
            line.events.push({
                time: Date.now(),
                value
            });
        }

        const onError = value =>  {
            line.errors.push({
                time: Date.now(),
                value
            });
            line.end = Date.now();
        }


        const onComplete = () => {
            line.stops.push({
                time: Date.now(),
            });
            line.end = Date.now();
        }

        return {
            onEvent,
            onError,
            onComplete
        }
    }

    return {
        chart: { createLine },
        state
    }
};