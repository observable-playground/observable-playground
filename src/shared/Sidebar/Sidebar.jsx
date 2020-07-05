import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { ExternalLink } from '../ExternalLink.jsx';
import { Logo } from '../Logo/Logo.jsx';
import { MenuComponent } from '../Menu/MenuComponent.jsx';
import style from './Sidebar.module.scss';


export class Sidebar extends React.Component {
    render(){
        return (
            <section>
                <div className={style.Sidebar__DesktopSideMenuHeader}>
                    <Logo />

                    <div className={style.Sidebar__Social}>
                        <ExternalLink
                            className={style.Sidebar__twitter}
                            title="Follow me on twitter"
                            href="https://twitter.com/kddsky"
                        >follow me <FontAwesomeIcon icon={faTwitter}
                            className={style.Sidebar__twitter_icon}
                            style={{ width: '1em', float: 'right' }}
                        /></ExternalLink>

                        <ExternalLink
                            className={style.Sidebar__githubstar}
                            title="Support the project on GitHub"
                            href="https://github.com/observable-playground/observable-playground"
                        >star this <FontAwesomeIcon icon={faStar}
                            className={style.Sidebar__githubstar_icon}
                            style={{ width: '1em', float: 'right' }}
                        /></ExternalLink>

                        <ExternalLink
                            target="_blank"
                            className={style.Sidebar__github}
                            title="Report a bug on GitHub"
                            href="https://github.com/observable-playground/observable-playground/issues"
                        >report a bug <FontAwesomeIcon icon={faGithub}
                            className={style.Sidebar__github_icon}
                            style={{ width: '1em', float: 'right' }}
                        /></ExternalLink>

                        <Link href="/gist/"><ExternalLink
                            className={style.Sidebar__share}
                            title="Create a gist"
                            href="/gist/"
                        >share a gist <FontAwesomeIcon icon={faPlus}
                            className={style.Sidebar__share_icon}
                            style={{ width: '1em', float: 'right' }}
                        /></ExternalLink></Link>

                    </div>
                </div>
                <MenuComponent />
            </section>
        );
    }
}