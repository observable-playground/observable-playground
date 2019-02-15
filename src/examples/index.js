import { library as rxjs } from './rxjs';
import { library as kefir } from './kefir';
import { library as baconjs } from './bacon';

export const libraries = { rxjs, baconjs, kefir };

export const menu = Object.keys(libraries)
    .map(key=>({
        handle: key,
        library: libraries[key]
    }));


export const findExample = ({ libraryHandle, exampleHandle }) => {
    const library = libraries[libraryHandle];
    if (library === undefined) {
        return;
    }

    return library.examples[exampleHandle];
}
