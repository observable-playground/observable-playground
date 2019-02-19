import chart from '../chart';
const api = {
    rxObserver: chart.createRxObserver,
    kefirObserver: chart.createKefirObserver,
    baconObserver: chart.createBaconObserver,
};
export { api };