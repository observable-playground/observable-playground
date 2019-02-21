import React, { Component } from 'react'
import { GistFileComponent } from './GistFile.component';
import './Gist.css';
import { GIST_URL_PREFIX } from './const';

export class GistComponent extends Component {
    render(){
        const { data } = this.props;
        const { owner } = data;
        const files = Object.values(data.files);

        const gistName = files[0].filename;

        const fileValues = files
            .sort((a,b)=> a.filename.localeCompare(b.filename));

        return (
            <React.Fragment>
                <div className="Gist__Header">
                    <a
                        className="Gist__Avatar"
                        href={ 'https://gist.github.com/' + owner.login }
                        target="_blank"
                    >
                        <img
                            src={ owner.avatar_url }
                            alt="Owner avatar"
                        />
                    </a>

                    <div className="Gist__Header__Main">
                        <div className="Gist__Path">
                            <a
                                className="Gist__UserName"
                                href={ 'https://gist.github.com/' + owner.login }
                                target="_blank"
                            >{ owner.login }</a>
                            &nbsp;/&nbsp;
                            <a
                                className="Gist__GistName"
                                href={ GIST_URL_PREFIX + data.id }
                                target="_blank"
                            >{gistName}</a>
                        </div>

                        <div className="Gist__Description">
                            { data.description }
                        </div>
                    </div>
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