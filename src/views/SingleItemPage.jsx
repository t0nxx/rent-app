import React from 'react';
import NavBar from '../components/NavBar';
import { Container, Badge, Button, Table, FormControl, Form } from 'react-bootstrap';
import Styles from '../styles/singleitempage.module.css';
import { useParams } from 'react-router-dom';

export default function SingleItemPage(props) {
    const { picId } = useParams()
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
                            <div className={Styles.clockdiv}>
                                <p>Dead Time</p>
                                <div>
                                    <span className={Styles.minutes}>58</span>
                                    <div className={Styles.smalltext}>Min</div>
                                </div>
                                <div>
                                    <span className={Styles.seconds}>35</span>
                                    <div className={Styles.smalltext}>sec</div>
                                </div>
                            </div>
                            <Table responsive borderless>
                                <tbody>
                                    <tr><td>Ahmed</td><td><span style={{ color: 'blue' }}>2000$</span></td></tr>
                                    <tr><td>Toni</td><td><span style={{ color: 'blue' }}>1000$</span></td></tr>
                                    <tr><td>Test</td><td><span style={{ color: 'blue' }}>500$</span></td></tr>

                                </tbody>
                            </Table>
                            <Form inline style={{ width: '100%' }}>
                                <FormControl type='text' placeholder='Plase Your Bid Now' className='col-8 mr-sm-2' />
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
                                <img style={{ height: '30px', width: '30px', marginLeft: '10px', paddingTop : '2px', paddingBottom : '2px'  }} src={`/rent-app/assets/used/report.png`} alt='pic' />

                                <h6 style={{ color: 'grey', margin: '10px', marginTop: '5px' }}>Report this ad</h6>
                            </div>
                        </div>
                        {/* <div className={Styles.ads}>
                            <h5>Advertisments</h5>
                        </div> */}
                    </div>
                </div>

            </Container>

        </>
    );
}

