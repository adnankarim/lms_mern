
import React, { useState } from 'react';
import Link from 'next/link';
import { APP_NAME } from '../../config';
import { isAuth } from '../../actions/auth';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const BsNavLink = (props) => {
    const { route, title } = props;
    return (
        <Link href={route}>
            <a className="port-navbar-link nav-link" id="navbarid" >{title}</a>
        </Link>
    );
}
const Login = (props) => {
    const { route, title } = props;
    return (
        <Link href={route}>

            <span className='port-navbar-link clickable nav-link' id="navbarid">{title}</span>
        </Link>

    );
}
const Logout = (props) => {
    const { route, title } = props;
    return (<Link href={route}>

        <span className='port-navbar-link clickable nav-link' id="navbarid">{title}</span>
    </Link>);
}
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        return (setIsOpen(!isOpen));
    }


    return (
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
            <NavbarBrand className="port-navbar-brand" href="/">{APP_NAME}</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem className="port-navbar-item">
                        <BsNavLink title="Home" route="/" />
                    </NavItem>
                    <NavItem className="port-navbar-item">
                        <BsNavLink title="About" route="/about" />
                    </NavItem>
                    <NavItem className="port-navbar-item">
                        <BsNavLink title="Support" route="/support" />
                    </NavItem>
                    <NavItem className="port-navbar-item">
                        <BsNavLink title="Blog" route="/blog" />
                    </NavItem>
                    <NavItem className="port-navbar-item">
                        <BsNavLink title="Statistics" route="/statistics" />
                    </NavItem>
                    {!(isAuth()) && <NavItem className="port-navbar-item">
                        <Login title="Login" route="/signin" />
                    </NavItem>}
                    {isAuth() && <NavItem className="port-navbar-item">
                        <Logout title="Logout" route="/signout" />
                    </NavItem>}

                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;