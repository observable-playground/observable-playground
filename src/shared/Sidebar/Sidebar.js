import React from 'react'
import { MenuComponent } from '../Menu/MenuComponent.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../Logo/Logo.js';
import './Sidebar.css'


export class Sidebar extends React.Component {
    render(){
        return (
            <section>
                <div className="Sidebar__DesktopSideMenuHeader">
                    <Logo />

                    <div className="Sidebar__Social">
                        <a
                            target="_blank"
                            className="Sidebar__twitter-link"
                            title="Follow me on twitter"
                            href="https://twitter.com/kddsky"
                        >follow updates <FontAwesomeIcon icon={faTwitter}
                            style={{ width: '1em', float: 'right' }}
                        /></a>

                        <a
                            target="_blank"
                            className="Sidebar__github-link"
                            title="Check the source code on GitHub"
                            href="https://github.com/observable-playground/observable-playground"
                        >star this <FontAwesomeIcon icon={faStar}
                            style={{ width: '1em', float: 'right' }}
                        /></a>

                        <a
                            target="_blank"
                            className="Sidebar__github-link"
                            title="Check the source code on GitHub"
                            href="https://github.com/observable-playground/observable-playground/issues"
                        >report a bug <FontAwesomeIcon icon={faGithub}
                            style={{ width: '1em', float: 'right' }}
                        /></a>


                    </div>
                </div>
                <MenuComponent />
            </section>
        );
    }
}