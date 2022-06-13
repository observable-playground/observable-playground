import React from 'react';
import { menu } from '../../examples';
import { ExamplePage } from '../../Example/Example.page'

export function getStaticPaths() {
    const fs = require('fs');
    const path = require('path');

    const paths = menu.map(({ handle: libId }) => {
        const fullDirPath = path.resolve('src/examples/', libId + '/files');
        const folderContents = fs.readdirSync(fullDirPath);

        return folderContents
            .map(subPath => path.resolve(fullDirPath, subPath))
            .filter(p => !fs.statSync(p).isDirectory())
            .filter(p => path.extname(p) === '.md')
            .map(p => {
                const fileId = path.basename(p, '.md');
                return { params: { libId, fileId } }
            })
    })
        .reduce((acc, curr) => [...acc, ...curr]); // flattern

    return {
        paths,
        fallback: false
    }
}

export function getStaticProps(context) {
    const fs = require('fs');
    const path = require('path');

    const { params: { libId, fileId } } = context;
    const fullFilePath = path.resolve('src/examples/', libId + '/files/' + fileId + '.md');
    const fileContents = fs.readFileSync(fullFilePath, 'utf-8');
    const editUrl = `https://github.com/observable-playground/observable-playground/tree/master/src/examples/${libId}/files/${fileId}.md`;
    /**
     * meta format:
     *  
     *  <!--
     *  name:       alternative name to use for path
     *  title:      title to use in the h1 for the page
     *  pageTitle:  html page title
     *  desc:       meta description for SEO
     *  docsUrl:    URL to official website docs
     *  -->
     */
    const r = /(<!--(\r\n|\r|\n))((.|\n|\r)*?)((\r\n|\r|\n)-->)/gm;

    const content = fileContents.replace(r, '');
    const meta =
        r.exec(fileContents)[3]
        .split(/\r\n|\r|\n/)
        .reduce((acc, curr) => {
            const [, key, value] = /^(.*?)\s*:\s*(.*)\s*$/.exec(curr);
            acc[key] = value;
            return acc;
        }, {});

    const library = menu.find(x => x.handle == libId).library;

    return {
        props: {
            library,
            example: {
                ...meta,
                name: meta.name || fileId,
                editUrl, 
                content
            }
        }
    };
}

export default function fileIdComponent(props) {
    const { library, example } = props;

    return <ExamplePage library={library} example={example} />
}