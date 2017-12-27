import React, { Component } from 'react';
import './MenuComponent.css';
import { rxjs as examples } from '../examples';
import { NavLink } from 'react-router-dom';

export class MenuComponent extends Component {
    render() {
        return (
            <div className="Menu">
                <div className="Menu__body">
                    { examples.map(item => (
                        <NavLink
                            to={`/rxjs-${item.handle}`}
                            className="Menu__item"
                            activeClassName="Menu__item_active"
                            key={ item.handle }
                        >{item.handle}</NavLink>
                    )) }

                    <br/>

                    <NavLink
                        to={ '/about' }
                        className="Menu__item"
                        activeClassName="Menu__item_active"
                    >::about::</NavLink>
                </div>
            </div>
        );
    }
}