import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from '../styles/landingpage.module.css';

export default function DetailCard(props: any) {
    return (
        <div className={Styles.cardDetail}>

            <div className='row'>
                <img height='200px' width='200px' src={`/assets/used/${props.img}`} alt='pic' />
                <div style={{ marginLeft: '20px', width: '60%' }}>
                    <h2 >{props.title}</h2>
                    <h5 style={{ color: 'grey' }}>bid now {Math.floor(Math.random() * 1000)} ,  bids</h5>
                    <br /><br /><br /><br />
                    <div className={Styles.divider}></div>
                    <div className='d-flex'>
                        <h6 style={{ color: 'grey', marginLeft: '10px' }}> cairo , down town </h6>
                        <h6 style={{ color: 'grey', marginLeft: 'auto' }}> current price {Math.floor(Math.random() * 1000)}</h6>
                    </div>

                </div>
                <FontAwesomeIcon icon='star' style={{ color: 'yellow', height: '30px', width: '30px' }} />
            </div>

        </div>
    );
}
