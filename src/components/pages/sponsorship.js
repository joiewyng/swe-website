import React, { Component } from 'react';
import '../../default.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Sponsorship extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid faq">
                    <div className="row subtitle">
                        <h1 className="row-heading">Sponsorship</h1>
                        <div>
                            <p id="sponsor_content">We greatly appreciate your contributions and donations to SWE. If you would like to sponsor
                            SWE or donate to a specific directorship, please email cornell.swe.cr@gmail.com. More 
                            information about the programs and events that we organize can be found in the Sponsorship Packet.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row subtitle">
                            <h1 className="row-heading" id="past_sponsor_text">Past Sponsors:</h1>
                            <Container>
                                <Row>
                                    <Col>
                                        <img alt="capital one" src={require("../../images/corporate/real_cap_one.png")}></img>
                                    </Col>
                                    <Col>                                       
                                        <img alt="microsoft" src={require("../../images/corporate/microsoft.png")}></img>
                                    </Col>
                                    <Col>                                       
                                        <img alt="american express" src={require("../../images/corporate/amex.png")}></img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img alt="shell" src={require("../../images/corporate/shell.png")}></img>
                                    </Col>
                                    <Col>                                       
                                        <img alt="schlumberger" src={require("../../images/corporate/new_schlumberger.png")}></img>
                                    </Col>
                                    <Col>                                       
                                        <img alt="harris" src={require("../../images/corporate/harris.png")}></img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img alt="phillips" src={require("../../images/corporate/phillips.png")}></img>
                                    </Col>
                                    <Col>                                       
                                        <img alt= "boeing" src={require("../../images/corporate/boeing.png")}></img>
                                    </Col>
                                    <Col>                                       
                                        <img alt="lockheed martin" src={require("../../images/corporate/lockheed.png")}></img>
                                    </Col>
                                </Row>
                            </Container>
                            {/* <Container fluid>
                                <Row>
                                    <Col xs={6} md={4}>
                                    <Image src="../../images/fa19/2019-SWE-eboard.JPG" rounded />
                                    </Col>
                                    <Col xs={6} md={4}>
                                    <Image src="../../images/fa19/2019-SWE-eboard.JPG" roundedCircle />
                                    </Col>
                                    <Col xs={6} md={4}>
                                    <Image src="../../images/fa19/2019-SWE-eboard.JPG" thumbnail />
                                    </Col>
                                </Row>
                            </Container> */}
                    </div>
                </div>
            </div>

        );
    }
}

export default Sponsorship;
