import React from 'react';
import { Container, Row } from 'react-bootstrap';
import error from '../../image/404.jpeg';
import Image from 'react-bootstrap/Image'

const NotFound = () => {
    return (
        <Container>
            <Row>
                <h1 className='text-uppercase fw-bold my-3 text-danger'>Page Not Found</h1>
            <Image className='w-50 mx-auto' src={error} alt="" />
            </Row>
        </Container>
    );
};

export default NotFound;