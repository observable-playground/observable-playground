export const createApi = ()=>{
    const state = {
        lines: []
    };

    const createLine = ()=>{
        const line = {
            start: Date.now(),
            end: undefined,
            events: [],
        };

        state.lines.push(line);

        const onEvent = value => {
            line.events.push({
                time: Date.now(),
                value
            });
        }

        const onError = () => {}

        const onComplete = () => {
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