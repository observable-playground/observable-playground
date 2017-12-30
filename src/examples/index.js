import { library as rxjs } from './rxjs-examples';

export const libraries = { rxjs };

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
