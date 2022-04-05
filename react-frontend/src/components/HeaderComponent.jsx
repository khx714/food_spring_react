import React, { Component } from 'react';

import PropTypes from 'prop-types';

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href="https://google.com" className=" navbar-brand">Product Managment App</a></div>
                    
                    </nav>
                </header>
            </div>
        );
    }
}



export default HeaderComponent;