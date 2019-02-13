import React, { Component } from 'react'
import { GistFileComponent } from './GistFile.component';

export class GistComponent extends Component {
    render(){
        const { data } = this.props;
        const { files } = data;
        const fileValues = Object.values(files);

        return (
            <React.Fragment>
                <div className="PageBlock">
                    { data.description }
                </div>
                <React.Fragment>
                    {
                        fileValues.map(file =>
                            <GistFileComponent
                                key={file.filename}
                                file={ file }
                                />
                        )
                    }
                </React.Fragment>
            </React.Fragment>
        )
    }
}