import * as React from 'react';
import NavBar from '../components/NavBar';
import { NavBarProps } from '../interfaces/NavBar.props';
import { Container, Pagination, Badge } from 'react-bootstrap';
import SearchDropDown from '../components/SearchDropDown';
import Styles from '../styles/landingpage.module.css';
import DetailCard from '../components/DetailCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LandingPage(props: NavBarProps) {
    //  Pagination bar
    const active = 2;
    const items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <>
            <NavBar title='landing page' />
            <Container>
                <h5 className={Styles.heading}>Type of Bids <span style={{ color: 'grey' }}> 5283</span> Ad This Week</h5>

                {/* bid types */}

                <div className='row justify-content-between ml-1'>
                    <p>Apartment  500</p>
                    <p>Duplex  644</p>
                    <p>Room  849</p>
                </div>
                <div className='row justify-content-between ml-1'>
                    <p>Penthouse  122</p>
                    <p>Studio 9797</p>
                    <p>Hotel  999</p>

                </div>

                <div className={Styles.headingArea}>
                    <div className='row'>
                        <div className='col-md-4 col-sm-4 col-xs-12'>
                            <h4>Available </h4>
                        </div>
                        <div className='col-md-8 col-sm-8 col-xs-12'>
                            <div className='d-flex justify-content-around'>
                                <h5>Sort by</h5>
                                <Badge pill variant='primary'>
                                    <span>Newer</span>
                                    <FontAwesomeIcon icon='long-arrow-alt-up' style={{ marginLeft: '5px', color: 'yellow', height: '20px', width: '20px' }} />
                                </Badge>
                                <Badge pill variant='primary'>
                                    <span>Older</span>
                                    <FontAwesomeIcon icon='long-arrow-alt-down' style={{ marginLeft: '5px', color: 'yellow', height: '20px', width: '20px' }} />
                                </Badge>

                                <FontAwesomeIcon icon='grip-vertical' style={{ marginLeft: '5px', color: 'grey', height: '30px', width: '30px' }} />
                                <FontAwesomeIcon icon='list' style={{ marginLeft: '5px', color: 'grey', height: '30px', width: '30px' }} />


                            </div>

                        </div>
                    </div>

                </div>

                <div className={Styles.flexWrapper}>
                    <div className={Styles.cardWrapper}>

                        <DetailCard img='h4.jpg' title='House1' id='4' />
                        <DetailCard img='h2.jpg' title='House2' id='2' />
                        <DetailCard img='h3.jpg' title='House3' id='3' />
                        <DetailCard img='h1.jpg' title='House4' id='1' />

                        <br />
                        <Pagination size='lg' style={{ marginLeft: '10%' }}>{items}</Pagination>
                    </div>

                    <div>
                        <div className={Styles.searchFilter}>

                            <h4>Search By Details</h4>
                            <SearchDropDown name='Bedrooms' />
                            <SearchDropDown name='Price' />
                            <SearchDropDown name='Furnished' />
                            <SearchDropDown name='Ground' />
                            <SearchDropDown name='Amenities' />
                            <SearchDropDown name='Bathrooms' />

                        </div>
                        <div className={Styles.ads}>
                            <h5>Advertisments</h5>
                        </div>
                    </div>
                </div>

            </Container>

        </>
    );
}

