import React from 'react';
import {Row, Col, Button, Container} from 'react-bootstrap'
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';


const HeroSection = () => {
    return ( 
        <Container  className="container d-flex justify-content-center">
             <Row >
                <Col className='text-center' >
                    <h1>ferhad baaqieel</h1>
                    <p >web and flutter development</p>
                    <Button variant="light" style={{borderRadius:'17px',borderColor:'black'}}>Download CV</Button>{' '}
                    <Button variant="dark" style={{borderRadius:'17px'}}>Contact</Button>
                   
                   {/* <Row>
                   <img style={{width:'20%'}} src={linkedin}></img>
                     <img style={{width:'20%'}} src={github}></img>
   
                   </Row> */}
                </Col>
            </Row>
    </Container>

     );
}
 
export default HeroSection;
