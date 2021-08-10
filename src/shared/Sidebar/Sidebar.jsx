import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { ExternalLink } from '../ExternalLink.jsx';
import { Logo } from '../Logo/Logo.jsx';
import { MenuComponent } from '../Menu/MenuComponent.jsx';
import style from './Sidebar.module.scss';


export function Sidebar() {
    return (
        <div>
            <header className={style.desktopSideMenuHeader}>
                <Logo />

                <div className={style.social}>
                    <ExternalLink
                        className={style.githubstar}
                        title="Support the project on GitHub"
                        href="https://github.com/observable-playground/observable-playground"
                    >star this <FontAwesomeIcon icon={faStar}
                        className={style.githubstar_icon}
                        style={{ width: '1rem', float: 'right' }}
                        /></ExternalLink>

                    <ExternalLink
                        target="_blank"
                        className={style.github}
                        title="Report a bug on GitHub"
                        href="https://github.com/observable-playground/observable-playground/issues"
                    >report a bug <FontAwesomeIcon icon={faGithub}
                        className={style.github_icon}
                        style={{ width: '1rem', float: 'right' }}
                        /></ExternalLink>

                    <Link href="/gist/"><a
                        className={style.share}
                        title="Create a gist"
                    >share a gist <FontAwesomeIcon icon={faPlus}
                        className={style.share_icon}
                        style={{ width: '1rem', float: 'right' }}
                        /></a></Link>

                    <ExternalLink
                        className={style.twitter}
                        title="My twitter"
                        href="https://twitter.com/kddsky"
                    >
                        <img
                            className={style.twitter_image}
                            src="/me.jpg"
                            alt="twitter photo"
                            width="32px"
                            height="32px"
                        />

                        <span className={style.twitter_main}>
                            <span className={style.twitter_name}>Kos Palchyk</span>
                            <span className={style.twitter_handle}>@kddsky</span>
                        </span>

                        <FontAwesomeIcon icon={faTwitter}
                            className={style.twitter_icon}
                            style={{ width: '1rem', float: 'right' }}
                        /></ExternalLink>

                </div>
            </header>
            <MenuComponent />
        </div>
    );
}