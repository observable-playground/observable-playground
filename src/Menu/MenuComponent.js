import React, { Component } from 'react';
import './MenuComponent.css';
import { menu as examplesMenu } from '../examples';
import { NavLink } from 'react-router-dom';

export class MenuComponent extends Component {
    render() {
        return (
            <div className="Menu">

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
                                                    <NavLink
                                                        to={`/${root.handle}/${item}`}
                                                        className="Menu__item"
                                                        activeClassName="Menu__item_active"
                                                        key={item}
                                                    >{item}</NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                            <span className="Menu__library-name">
                                { root.library.name }
                                <span className="Menu__library-version">v{ root.library.version }</span>
                            </span>
                        </li>
                    ))}
                </ul>

                <NavLink
                    to={'/about'}
                    className="Menu__item"
                    activeClassName="Menu__item_active"
                >About</NavLink>
            </div>
        );
    }
}