import React from 'react';
import { menu } from '../../examples';

export function getStaticPaths() {
    const paths = menu.map(m => ({ params: { libId: m.handle } }));

    return {
        paths,
        fallback: false
    }
}

export function getStaticProps(context) {
    const { params: { libId } } = context;

    return {
        props: {
            libId
        }
    };
}

export default (props) => {
    const Page = menu.find(m => m.handle == props.libId)?.Page;
    return <Page />;
}