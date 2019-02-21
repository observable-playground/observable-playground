import chart from '../chart';
import { palette } from '../../../shared/consts';

const api = {
    rxObserver: chart.createRxObserver,
    kefirObserver: chart.createKefirObserver,
    baconObserver: chart.createBaconObserver,
    palette
};
export { api };