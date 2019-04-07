import React from 'react'
import { Link } from '@reach/router'

import './Logo.css'

export class Logo extends React.Component {
    render(){
        return (
            <Link to="/" className="Logo">
                <span className="Logo__Main">Observable</span> Playground
            </Link>
        );
    }
}