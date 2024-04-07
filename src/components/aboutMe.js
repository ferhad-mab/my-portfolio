
import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import tools from '../assets/tools.png'


const AboutMe = () => {
    return (<>
     <Container className="d-flex flex-column align-items-center" style={{ minHeight: '100vh' }}>
            <h1 style={{ marginBottom: '5%' }}>About Me</h1>
            <Row>
                <Col xs={12} lg={6} className="d-flex justify-content-center justify-content-lg-end">
                    <img style={{ width: '60%', marginBottom: '1rem' }} className="img-fluid" src={tools} alt="tools" />
                </Col>
                <Col xs={12} lg={4} className="d-flex justify-content-center">
                    <p style={{margin:'10px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod quidem voluptate enim ea, nostrum eligendi ipsam
                        magni? Laborum recusandae non quasi, provident, ut
                        perferendis accusantium enim illo repellendus
                        exercitationem corporis!
                    </p>
                </Col>
            </Row>
        </Container>
    
    </>

     );
}
 
export default AboutMe;