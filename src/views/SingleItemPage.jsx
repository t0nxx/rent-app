import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import { Container, Badge, Button, Table, FormControl, Form } from 'react-bootstrap';
import Styles from '../styles/singleitempage.module.css';
import { useParams } from 'react-router-dom';
import $ from 'jquery';

export default function SingleItemPage(props) {
    const { picId } = useParams();
    const users = [
        { name: 'Ahmed', price: 2000 },
        { name: 'Toni', price: 1000 },
        { name: 'Hesham', price: 7000 },
        { name: 'You', price: 0 },
    ];
    const [biders, setBidders] = useState(users);
    const [mybid, setMyBid] = useState(0);
    const [secCounter, setSecCounter] = useState(60);
    const [minCounter, setMinCounter] = useState(40);
    const [isSold, setIsSold] = useState(false);

    const handelSubmit = (e) => {
        e.preventDefault();
        users[users.findIndex(e => e.name === 'You')].price = mybid;
        setBidders(users.sort((a, b) => b.price - a.price));
    };

    const progress = (timeleft, timetotal, $element) => {
        console.log($element);
        let progressBarWidth = timeleft * $element.width() / timetotal;
        $element.find('div').animate({ width: progressBarWidth }, 500)
        if (timeleft > 0) {
            setTimeout(function () {
                progress(timeleft - 1, timetotal, $element);
                //setSecCounter(timeleft - 1);
            }, 1000);
        } else {
            setIsSold(true);
        }
    };



    // useEffect(() => {
    //     if (secCounter > 0) {
    //         setTimeout(() => setSecCounter(secCounter - 1), 1000);
    //     } else {
    //         setSecCounter(60); setMinCounter(minCounter - 1);
    //     }

    // }, [secCounter, minCounter])
    useEffect(() => {
        progress(15, 15, $('#progressBarWrapper'));

    }, [])

    return (
        <>
            <NavBar title='landing page' />
            <Container>

                <div className={Styles.flexWrapper}>

                    <div className={Styles.cardDetail}>
                        <img height='400px' width='100%' src={`/rent-app/assets/used/h${picId}.jpg`} alt='pic' />


                        <div className="row d-flex m-3 justify-content-between">
                            <img height='100px' src={`/rent-app/assets/used/h${picId}.jpg`} alt='pic' />
                            <img height='100px' src={`/rent-app/assets/used/h${picId}.jpg`} alt='pic' />
                            <img height='100px' src={`/rent-app/assets/used/h${picId}.jpg`} alt='pic' />
                            <img height='100px' src={`/rent-app/assets/used/h${picId}.jpg`} alt='pic' />
                        </div>


                        <div className='row' style={{ backgroundColor: '#DFEAE8', borderRadius: '10px', marginBottom: '20px' }}>

                            <Button style={{ margin: '10px', width: '40%' }} type='submit'>Search</Button>
                            <Button variant="secondary" style={{ margin: '10px', width: '50%', border: 'none', backgroundColor: 'transparent', color: 'grey' }} type='submit'>Comments</Button>
                        </div>



                        <Table responsive borderless>
                            <tbody>
                                <tr><td>Key</td><td><span style={{ color: 'blue' }}>Value</span></td></tr>
                                <tr><td>Key</td><td><span style={{ color: 'blue' }}>Value</span></td></tr>
                                <tr><td>Key</td><td><span style={{ color: 'blue' }}>Value</span></td></tr>
                                <tr><td>Key</td><td><span style={{ color: 'blue' }}>Value</span></td></tr>
                                <tr><td>Key</td><td><span style={{ color: 'blue' }}>Value</span></td></tr>
                                <tr><td>Key</td><td><span style={{ color: 'blue' }}>Value</span></td></tr>
                            </tbody>
                        </Table>
                        <br />
                        <p>More details</p>
                        <p>2 Rooms in House for  100$/mo for each room with shared bed</p>

                    </div>

                    <div>
                        <div className={Styles.sideDetails}>

                            <h4 style={{ color: 'grey' }}>Overview</h4>

                            <div className="row">
                                <h3 style={{ color: 'blue', margin: '10px' }}>Room x For Rent </h3>
                                <img style={{ width: '20px', height: '20px', margin: '10px' }} src='/rent-app/assets/share.png' alt='plus' />
                                <img style={{ width: '20px', height: '20px', margin: '10px' }} src='/rent-app/assets/star.png' alt='plus' />

                            </div>
                            <p>Date : yesterday</p>
                            <p style={{ marginLeft: 'auto' }}>151 views</p>

                            <div className={Styles.divider}></div>

                            <Button variant="light" style={{ width: '100%' }}>
                                <Badge variant="light" style={{ fontSize: '18px' }}>Current Price <span style={{ color: 'blue' }}> 644 $</span></Badge>
                            </Button>

                        </div>
                        <div className={Styles.sideDetails}>
                            <h4 style={{ color: 'grey' }}>Bids</h4>
                            <div >
                                <p>Dead Time</p>
                                <div id="progressBarWrapper" className={Styles.progressBarWrapper}>
                                    <div className={Styles.progressBar}></div>
                                </div>
                                {/* <div>
                                    <span className={Styles.minutes}>{minCounter}</span>
                                    <div className={Styles.smalltext}>Min</div>
                                </div>
                                <div>
                                    <span className={Styles.seconds}>{secCounter}</span>
                                    <div className={Styles.smalltext}>sec</div>
                                </div> */}
                            </div>
                            <Table responsive borderless>
                                <tbody>
                                    {biders.map(person =>
                                        <tr key={person.name}><td>{person.name}</td><td><span style={{ color: 'blue' }}>{person.price}$</span></td></tr>
                                    )}

                                </tbody>
                            </Table>
                            <h1 hidden={!isSold} style={{ color: 'red', fontWeight: 'bolder' }}>Sold Out , Thanks </h1>
                            <Form hidden={isSold} inline style={{ width: '100%' }} onSubmit={handelSubmit}>
                                <FormControl type='number' onChange={e => setMyBid(e.target.value)} placeholder='Place Your Bid Now' className='col-8 mr-sm-2' />
                                <Button variant="success" type='submit'>Bid</Button>
                            </Form>
                            
                        </div>

                        <div className={Styles.sideDetails}>
                            <h4 style={{ color: 'grey' }}>Auther</h4>
                            <div className="row">
                                <div style={{ padding: '10px', marginLeft: '10px', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'grey' }}>
                                    <img style={{ height: '20px', width: '20px', marginBottom: '5px' }} src={`/rent-app/assets/used/user.png`} alt='pic' />
                                </div>
                                <h4 style={{ color: 'blue', margin: '10px', marginTop: '5px' }}>Toni</h4>
                                <div style={{ padding: '10px', marginLeft: 'auto', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'grey' }}>
                                    <img style={{ height: '20px', width: '20px', marginBottom: '5px' }} src={`/rent-app/assets/used/comment-w.png`} alt='pic' />
                                </div>
                            </div>

                            <div className="row bg-light mt-4">
                                <img style={{ height: '30px', width: '30px', marginLeft: '10px', paddingTop: '2px', paddingBottom: '2px' }} src={`/rent-app/assets/used/report.png`} alt='pic' />

                                <h6 style={{ color: 'grey', margin: '10px', marginTop: '5px' }}>Report this ad</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>

        </>
    );
}

