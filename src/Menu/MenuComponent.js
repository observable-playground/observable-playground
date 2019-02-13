import React, { Component } from 'react';
import './MenuComponent.css';
import { menu as examplesMenu } from '../examples';
import { Link } from '@reach/router'

export class MenuComponent extends Component {
    render() {
        return (
            <div className="Menu">
                {
                    examplesMenu.map(root => (
                        <div key={root.handle} className="Menu__library-name">
                            <Link to={ '/' + root.handle }>{root.library.name}</Link>
                            <span className="Menu__library-version">v{root.library.version}</span>
                        </div>
                    ))
                }

                <div className="Menu__Gist">
                    <Link to="/gist">Gist</Link>
                </div>

                <hr />

                <ul className="Menu__examples">
                    { examplesMenu.map(root => (
                        <li key={root.handle} className="Menu__library">
                            <ul className="Menu__library-contents">
                                { root.library.groups.map(group => (
                                    <li key={ group.name } className="Menu__group">
                                        <span className="Menu__group-name">{group.name}</span>
                                        <ul className="Menu__group-contents">
                                            { group.items.map(item => (
                                                <li key={ item }>
                                                    <Link
                                                        to={`/${root.handle}/${item}`}
                                                        className="Menu__item"
                                                        key={item}
                                                    >{item}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}