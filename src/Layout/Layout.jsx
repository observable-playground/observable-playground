import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ExternalLink } from '../shared/ExternalLink';
import { Logo } from '../shared/Logo/Logo';
import { Sidebar } from '../shared/Sidebar/Sidebar';
import style from './Layout.module.scss';

export class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuVisible: false
        };

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.hideMobileMenu = this.hideMobileMenu.bind(this);
    }

    hideMobileMenu(){
        if (!this.state.mobileMenuVisible) {
            return;
        }

        this.setState({
            mobileMenuVisible: false
        });
    }

    toggleMobileMenu(){
        this.setState({
            mobileMenuVisible: !this.state.mobileMenuVisible
        })
    }

    render(){
        const children = this.props.children;

        return (
                <div className={style.App}>
                    <div className={style.App__MobileHeader}>
                        <button
                            className={ style.App__MobileMenuSwitch + (this.state.mobileMenuVisible ? ' active' : '') }
                            onClick={ this.toggleMobileMenu }
                        ><FontAwesomeIcon icon={faBars} /></button>

                        <span
                            onClick={this.hideMobileMenu}
                        ><Logo /></span>

                        <span className={ style.header_spring }></span>

                        <ExternalLink
                            className={style.App__twitter_link}
                            title="Follow me on twitter"
                            href="https://twitter.com/kddsky"
                        ><FontAwesomeIcon icon={faTwitter} 
                            style={ { width: '1em' } }
                        /></ExternalLink>

                        <ExternalLink
                            className={style.App__github_link}
                            title="Star the project"
                            href="https://github.com/observable-playground/observable-playground"
                        ><FontAwesomeIcon icon={faStar}
                            style={ { width: '1em' } }
                        /></ExternalLink>

                        <ExternalLink
                            className={style.App__github_link}
                            title="See the source code on GitHub"
                            href="https://github.com/observable-playground/observable-playground/issues"
                        ><FontAwesomeIcon icon={faGithub}
                            style={ { width: '1em' } }
                        /></ExternalLink>
                    </div>

                    <div className={style.App__body}>
                        <aside
                            className={style.App__menu + ' ' + (this.state.mobileMenuVisible ? style.visible: '')}
                            onClick={this.hideMobileMenu}
                        ><Sidebar /></aside>

                        <main id="content" className={ style.App__contents + ' ' + (this.state.mobileMenuVisible ? style.hidden : '')  }>
                            { children }
                        </main>
                    </div>
                </div>
        );
    }
}