import * as rxjs from './rxjs';
import * as kefir from './kefir';
import * as baconjs from './baconjs';

const entries = { rxjs, baconjs, kefir };

export const menu = Object.keys(entries)
    .map(key=>({
        handle: key,
        Page: entries[key].Page,
        library: entries[key].library
    }));