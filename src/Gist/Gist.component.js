import React, { Component } from 'react'
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper'

export class GistComponent extends Component {
    render(){
        const { data } = this.props;
        const { files } = data;
        const fileName = Object.keys(files).find(fileName => /.*\.js/.test(fileName))
        if (!fileName){
            return <div>No .js file found</div>
        }
        const code = files[fileName].content;
        return <PlaygroundWrapper code={code} />
    }
}