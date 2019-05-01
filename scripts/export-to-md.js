// const { examplesMenu } = require('../src/examples/');


//             ...examplesMenu
//                 .map(({ handle, library }) => {
//                     return {
//                         path: `/${handle}/`,
//                         template: `src/Library/${handle}/index.js`,
//                         getData: () => ({
//                             handle,
//                             library
//                         }),
//                         children:
//                             Object.entries(library.examples)
//                                 .map(([key, value]) => {

//                                     if (typeof value === 'string') {
//                                         const route = {
//                                             path: `/${key}/`,
//                                             template: 'src/Example/Example.page.js',
//                                             getData: () => ({
//                                                 libraryName: library.name,
//                                                 exampleName: key,
//                                                 example: {
//                                                     name: key,
//                                                     title: key,
//                                                     files: [{ name: '.js', ext: '.js', content: value }]
//                                                 }
//                                             }),
//                                         }

//                                         return route;
//                                     } else {
//                                         const { files: filePaths, name, title } = value;

//                                         const files = filePaths.map(filePath => ({
//                                             name: filePath,
//                                             ext: path.extname(filePath),
//                                             content: fs.readFileSync(path.resolve(__dirname, 'src', filePath), 'utf8')
//                                         }));

//                                         const example = {
//                                             name,
//                                             title,
//                                             files 
//                                         };

//                                         const route = {
//                                             path: `/${key}/`,
//                                             template: 'src/Example/Example.page.js',
//                                             getData: () => ({
//                                                 libraryName: library.name,
//                                                 exampleName: key,
//                                                 example,
//                                             }),
//                                         }

//                                         return route;
//                                     }
//                                 }),
//                     }
//                 })
