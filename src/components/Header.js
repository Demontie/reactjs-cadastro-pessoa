import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Dropdown } from 'react-materialize';
class Header extends Component {
    render() {
        return (
            <Navbar brand='logo' right>
                <Dropdown trigger={
                    <NavItem href='get-started.html'><Icon>list</Icon></NavItem>
                }>
                    <NavItem>exemplo 1</NavItem>
                    <NavItem>2</NavItem>
                    <NavItem divider />
                    <NavItem>3</NavItem>
                </Dropdown>
            </Navbar>

        );
    }
}

export default Header;