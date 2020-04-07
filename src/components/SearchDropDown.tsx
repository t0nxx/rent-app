import * as React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function SearchDropDown(props: any) {
    return (
        <Dropdown style={{ marginTop: '15px' }}>
            <Dropdown.Toggle variant='light' id='dropdown-basic'
                style={{ width: '100%', textAlign: 'left', backgroundColor: 'white' }}
            >
                {props.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action 1</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Action 2</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Action 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
