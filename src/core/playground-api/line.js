/**
 * 
 * @param {String} lineName 
 * @returns {
 *   {
 *     lineName: string;
 *      start: number;
 *      end: undefined | number;
 *      stops: any[];
 *      errors: any[];
 *      events: [number, { time: number, index: number, value: any }][];
 *   }
 * }
 */
function createLine(lineName) {
    return {
        lineName,
        start:  Date.now(),
        end:    undefined,
        events: [],
        errors: [],
        stops:  [],
    };
};


export { createLine }