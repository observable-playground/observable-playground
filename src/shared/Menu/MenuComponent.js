import React, { Component } from 'react';
import { Link, Match } from '@reach/router'
import { withSiteData } from 'react-static'
import './MenuComponent.css';

class MenuComponent extends Component {
    constructor(props){
        super(props);

        this.RXJS_MENU_ROOT = props.examplesMenu.find(({handle}) => handle === 'rxjs');
    }

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
                                        to={`/${root.handle}/${item}/`}
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
        const { examplesMenu } = this.props;
        const { RXJS_MENU_ROOT } = this;

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
                    <li key={root.handle} className="Menu__library">
                        {/* HACK FOR GIST MENU */}
                        <Match path={ '/gist/*' }>{
                            props =>
                                props.match
                                ? this.renderLibraryMenu(RXJS_MENU_ROOT)
                                : null
                        }</Match>
                        <Match path={ '/' }>{
                            props =>
                                props.match
                                ? this.renderLibraryMenu(RXJS_MENU_ROOT)
                                : null
                        }</Match>
                    </li>
                </ul>

            </nav>
        );
    }
}

const MenuComponentWithData = withSiteData(MenuComponent);
export { MenuComponentWithData as MenuComponent };