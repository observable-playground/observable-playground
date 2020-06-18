import React, { Component } from 'react';
import { Link, Match } from '@reach/router'
import { useSiteData } from 'react-static'
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

    renderLibraryMenu(menuEntry){
        return (
            <ul className="Menu__library-contents">
                { menuEntry.library.groups.map(group => (
                    <li key={group.name} className="Menu__group">
                        <span className="Menu__group-name">{group.name}</span>
                        <ul className="Menu__group-contents">
                            {group.items.map(item => (
                                <li key={item}
                                    className="Menu__item"
                                >
                                    <Link
                                        to={`/${menuEntry.handle}/${item}/`}
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
                    examplesMenu.map(menuEntry => (
                        <div key={menuEntry.handle} className="Menu__library-name">
                            <Link
                                getProps={ this.isLinkActive }
                                to={ '/' + menuEntry.handle + '/' }
                                >{menuEntry.library.name}</Link>
                            <span className="Menu__library-version">v{menuEntry.library.version}</span>
                        </div>
                    ))
                }

                <div className="Menu__Gist">
                    <Link
                        getProps={ this.isLinkActive }
                        to="/gist/"
                        >Share a gist</Link>
                </div>

                <hr />

                <ul className="Menu__examples">
                    { examplesMenu.map(menuEntry => (
                        <li key={menuEntry.handle} className="Menu__library">
                            <Match path={ '/' + menuEntry.handle + '/*' }>{
                                props =>
                                    props.match
                                    ? this.renderLibraryMenu(menuEntry) 
                                    : null
                            }
                            </Match>
                        </li>
                    ))}

                    <li className="Menu__library">
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

const MenuComponentWithData = ()=>{
    const { examplesMenu } = useSiteData();
    return (
        <MenuComponent examplesMenu={examplesMenu} />
    );
}

export { MenuComponentWithData as MenuComponent };