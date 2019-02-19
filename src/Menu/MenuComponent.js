import React, { Component } from 'react';
import './MenuComponent.css';
import { menu as examplesMenu } from '../examples';
import { Link, Match, Location } from '@reach/router'

export class MenuComponent extends Component {
    isLinkActive = ({ isPartiallyCurrent }) => {
        return isPartiallyCurrent
            ? { className: "Menu__Link active" }
            : { className: "Menu__Link" }
    }

    renderLibraryMenu(root){
        return (
            <ul className="Menu__library-contents">
                { root.library.groups.map(group => (
                    <li key={group.name} className="Menu__group">
                        <span className="Menu__group-name">{group.name}</span>
                        <ul className="Menu__group-contents">
                            {group.items.map(item => (
                                <li key={item}
                                    className="Menu__item"
                                >
                                    <Link
                                        to={`/${root.handle}/${item}`}
                                        getProps={this.isLinkActive}
                                        key={item}
                                    >{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <nav className="Menu">
                {
                    examplesMenu.map(root => (
                        <div key={root.handle} className="Menu__library-name">
                            <Link
                                getProps={ this.isLinkActive }
                                to={ '/' + root.handle + '/' }
                                >{root.library.name}</Link>
                            <span className="Menu__library-version">v{root.library.version}</span>
                        </div>
                    ))
                }

                <div className="Menu__Gist">
                    <Link
                        getProps={ this.isLinkActive }
                        to="/gist/"
                        >Load a gist</Link>
                </div>

                <hr />

                <ul className="Menu__examples">
                    { examplesMenu.map(root => (
                        <li key={root.handle} className="Menu__library">
                            <Match path={ '/' + root.handle + '/*' }>{
                                props =>
                                    props.match
                                    ? this.renderLibraryMenu(root) 
                                    : null
                            }
                            </Match>
                        </li>
                    ))}
                </ul>

            </nav>
        );
    }
}