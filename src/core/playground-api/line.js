/**
 * @param {String} lineName 
 * @returns {
 *   {
 *     lineName: string,
 *      start: number,
 *      end: undefined | number,
 *      height: number,
 *      stops: any[],
 *      errors: any[],
 *      events: [number, { time: number, index: number, value: any }][]
 *   }
 * }
 */
function createLine(lineName) {
    return {
        lineName,
        start:  Date.now(),
        end:    undefined,
        height: 1,
        events: [],
        errors: [],
        stops:  [],
    };
};


export { createLine }