import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import react from '../assets/react.png';
import flutter from '../assets/flutter.png';
import angular from '../assets/angular.png';
import bootstrap from '../assets/bootstrap.png';

const HeroSection = () => {
    return (
        <Container className="container d-flex justify-content-center align-items-center" style={{ minHeight: '85vh' }}>
            <Row style={{ marginBottom: '1.5rem' }}>
                <Col className='text-center'>
                    <h1>ferhad baaqieel</h1>
                    <p style={{marginBottom:'2rem'}}>web and flutter development</p>
                      <Button variant="light" style={{ borderRadius: '17px', borderColor: 'black', marginBottom: '1.5rem' }}>Download CV</Button>{' '}
                      <Button variant="dark" style={{ borderRadius: '17px', marginBottom: '1.5rem' }}>Contact</Button>
                    <Row className='justify-content-center' style={{marginBottom:'2rem'}}>
                      <div className="col-sm-1 col-2">
                        <img className="img-fluid" src={linkedin} alt="LinkedIn Logo" />
                      </div>

                      <div className='col-sm-1 col-2'>
                        <img className="img-fluid" src={github} alt="GitHub Logo" />
                      </div>
                    </Row>

                    <p style={{fontSize:'1.5rem'}}>tools</p>
                    <Row className='justify-content-center'>
                        <div className='col-sm-1 col-2'>
                            <img className="img-fluid" src={react} alt="React Logo" />
                        </div>
                        <div className='col-sm-1 col-2'>
                            <img style={{ width: '100%' }} src={flutter} alt="Flutter Logo" />
                        </div>
                        <div className='col-sm-1 col-2'>
                            <img style={{ width: '100%' }} src={angular} alt="Angular Logo" />
                        </div>
                        <div className='col-sm-1 col-2'>
                            <img style={{ width: '100%' }} src={bootstrap} alt="Bootstrap Logo" />
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default HeroSection;



