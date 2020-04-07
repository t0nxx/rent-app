import * as React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { NavBarProps } from '../interfaces/NavBar.props';
import { Link } from 'react-router-dom';
import Styles from '../styles/navbar.module.css';

export default function NavBar(props: NavBarProps) {
    return (
        <>
            <Container>
                <Navbar bg='white' expand='lg' >
                    <Navbar.Brand href='' >
                        <img src='/rent-app/assets/used/logo.png' height='50%' alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Item as={Link} to='/'>
                                <img src='/rent-app/assets/used/plus.png' alt='plus' />
                            </Nav.Item>
                            <Nav.Item as={Link} to='/'>
                                <img className={Styles.navIcon} src='/rent-app/assets/used/comment.png' alt='plus' />
                            </Nav.Item>
                            <Nav.Item as={Link} to='/'>
                                <img className={Styles.navIcon} src='/rent-app/assets/used/star.png' alt='plus' />
                            </Nav.Item>
                            <Nav.Item as={Link} to='/'>
                                <img className={Styles.navIcon} src='/rent-app/assets/used/bell.png' alt='plus' />
                            </Nav.Item>

                            <div className={Styles.divider}></div>

                            <Nav.Item as={Link} to='/'>
                                <img style={{ height: '50px', width: '50px' }} src='/rent-app/assets/used/person.png' alt='plus' />
                            </Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            {/* secound nav bar  */}
            <Navbar className='bg-light justify-content-center '>
                <Form inline>
                    <FormControl type='text' placeholder='keyword' className='col-5 mr-sm-2' />
                    <FormControl type='text' placeholder='city' className='col-5 mr-sm-2' />
                    <Button type='submit'>Search</Button>
                </Form>
            </Navbar>
        </>
    );
}
