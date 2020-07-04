import React, { Component } from 'react'
import { GistFileComponent } from './GistFile.component';
import style from './Gist.module.scss';
import { GIST_URL_PREFIX } from './const';
import Head from 'next/head';

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
                <Head>
                    <title>Gist { data.description }</title>
                </Head>
                <div
                    key={'Gist' + data.id}
                    className={style.Gist}
                >
                <div className={style.Gist__Header}>
                    <a
                        className={style.Gist__Avatar}
                        rel="noreferrer noopener"
                        href={ 'https://gist.github.com/' + owner.login }
                        target="_blank"
                    >
                        <img
                            src={ owner.avatar_url }
                            alt="Owner avatar"
                        />
                    </a>

                    <div className={style.Gist__Header__Main + ' DangerousContentWidth'}>
                        <div className={style.Gist__Path}>
                            <a
                                className={style.Gist__UserName}
                                href={ 'https://gist.github.com/' + owner.login }
                                rel="noreferrer noopener"
                                target="_blank"
                            >{ owner.login }</a>
                            &nbsp;/&nbsp;
                            <a
                                className={style.Gist__GistName}
                                href={ GIST_URL_PREFIX + data.id }
                                rel="noreferrer noopener"
                                target="_blank"
                            >{gistName}</a>
                        </div>

                        <div className={style.Gist__Description}>
                            { data.description }
                        </div>
                    </div>
                </div>

                <React.Fragment>
                    {
                        fileValues.map(file =>
                            <GistFileComponent
                                key={"GistFile__" + file.filename}
                                file={ file }
                                />
                        )
                    }
                </React.Fragment>
                </div>
            </React.Fragment>
        )
    }
}