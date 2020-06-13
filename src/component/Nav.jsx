import React, { Component } from 'react'
import {Media } from 'reactstrap';
import { Navbar , NavbarBrand } from 'reactstrap';
class Nav extends Component{
    render(){
        return(
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand>Restaurant</NavbarBrand>
                </div>
            </Navbar>
        );
    }
}

export default Nav;