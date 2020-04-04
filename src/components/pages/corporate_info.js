import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import '../../default.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

class InformationSession extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid purple_header">
                    <div className="row subtitle">
                        <h1 className="row-heading">Host an Information Session</h1>
                        <div>
                            <p>The Cornell Society of Women Engineers plans, coordinates, and advertises
                            interactive sessions for Cornell Engineering students to meet with visiting corporations.
                            These sessions provide students with opportunites to meet company representatives in an 
                            informal setting and are avenues for companies to recruit students for permanent and 
                            internship positions, increasing company recognition among students. They are open to 
                            all students on campus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                            <p> For those interested in hosting information sessions, please see our 
                            <strong> Company Recruiter Brochure </strong> 
                            and our
                            <a href="#faq"><span className="link"> FAQ</span></a>.
                            To host an information session, please click on the following button.
                            For questions regarding company informations, please contact the Corporate Relations
                            directors at cornell.swe.cr@gmail.com. The SWE office is located at 162 Olin Hall, Ithaca, NY 14853.</p>
                            <div id="host_button">
                                <Button variant="secondary">Host an Information Session</Button>{' '}
                            </div>
                </div>
                <div className="row row-container">
                            <text className="h1 row-heading" id="faq-heading"><a id="faq" >Frequently Asked Questions</a></text>
                    </div>
                <div className="container-fluid">
                        <Accordion defaultActiveKey="0">
                            <Card
                                bg={'dark'}
                                text={'dark' === 'light' ? 'dark' : 'white'}
                            >
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <b>When are the best times to hold an info session?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Classes officially end at 4:25pm each day. The best times to hold events are in the evenings from 4:30-9PM.  
                                Events are typically an hour long and there are 15 minutes after the session to further connect with students and cleanup. 
                                If your event will take place in the morning or afternoon for a coffee chat or your event will take longer than an hour, 
                                as some in the past have done a joint case competition and info session, please reach out to cornell.swe.cr@gmail.com to 
                                arrange a special time for your event. For engineers, Tuesday and Thursday  evenings are preliminary (midterm) exam nights.
                                To avoid possible conflicts, please see the fall preliminary exam schedule or fall final exam schedule. Exams for the 
                                following courses are large lectures  and tend to be busy times for engineers: MATH 1910, 1920, 2930, 2940, PHYS 1112, 2213, 2214,
                                CHEM 2090, CS courses, ENGRD courses, and ENGRI courses.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <b>How do I gauge the anticipated attendance at a session?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>Although we can provide you with a number, we feel that it is better for companies
                                to anticipate their attendance as you will know best what your turnout would be. The average number of students
                                is typically 30. The base prices for the refreshment options are determined by this average number.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card
                                bg={'dark'}
                                text={'dark' === 'light' ? 'dark' : 'white'}
                            >
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    <b>When is the latest I can cancel?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>One week prior notice to SWE Corporate Relations Directors (cornell.swe.cr@gmail.com)
                                is required for cancellations. Cancellations made 7 days or less than the date of the session will
                                result in a charge of half of the base price of a session. Less than 24 hours notice will result
                                in a charge for the full price of the session. If you cancel at least 7 days prior to your
                                scheduled info session, you will be fully refunded.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    <b>Why did my room reservation change from what was confirmed?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>Professors who make requests for academic purposes have priority over any other type of reservation. 
                                If such an event happens, we will find the next available location in closest proximity to the original 
                                reservation. We will send out emails and announcements to students about the location change. Additionally, 
                                we will post signs and have a liaison to redirect students to your new session location the day of your session.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card
                                bg={'dark'}
                                text={'dark' === 'light' ? 'dark' : 'white'}
                            >
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    <b>Can I opt to have a closed session for selected interviewees only?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>Yes, you can choose to not advertise your session to the general campus community. We will notify 
                                Engineering Career Services of your request and they will notify only the list of interviewees. </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                    <b>When is payment due?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>Payment is due one to two weeks after an info session. </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card
                                bg={'dark'}
                                text={'dark' === 'light' ? 'dark' : 'white'}
                            >
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                    <b>How do I pay?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                <p> Please write a check payable to the Cornell Society of Women Engineers and send to: </p>
                                    <p>     <span className="address">
                                            Diversity Programs in Engineering<br/>
                                            C/O Cornell Society of Women Engineers<br/>
                                            146 Olin Hall, Cornell University<br/>
                                            Ithaca, NY 14853. <br/>
                                            </span>
                                    </p>   
                                <p> Please specify that the check is for an information session. You may also pay via credit card 
                                with our online payment option. For tax and federal ID, please email SWE Corporate Relations 
                                Directors(cornell.swe.cr@gmail.com). </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                    <b>How soon can I expect a confirmation after I submit my request?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7">
                                <Card.Body>Within a week. We will work on getting your request processed as soon as possible. 
                                Turnaround time can be as early as 24 hours. </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card
                                bg={'dark'}
                                text={'dark' === 'light' ? 'dark' : 'white'}
                            >
                                <Accordion.Toggle as={Card.Header} eventKey="8">
                                    <b>When is the latest I can request to coordinate an information session with SWE?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="8">
                                <Card.Body>In order for SWE to provide the highest quality service, all session details must be finalized at least 
                                    one week prior to the desired date. Ordering food and reserving a room is never a problem, however, it does
                                    take one week for room requests to be processed and confirmed. At least a week is necessary to properly 
                                    publicize an information session and ensure the session has sufficient number of liaisons and volunteers. 
                                    Since session details may take several days to finalize - especially if you have any questions about the 
                                    session options - we recommend that session requests are made at least 14 days prior to the desired date. </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="9">
                                    <b>I am interested in the Professional Networking Dinner, how can I register for that?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="9">
                                <Card.Body>SWE proudly presents our semiannual Professional Networking Dinner. Registration starts about 4-5 months 
                                before the Dinner. For more information and to sign up please visit our Professional Networking Dinner page.
                                If you have any questions about this event, please email cornellswe.pnd@gmail.com. </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                </div> 

                
            </div>
        );
    }
}

export default InformationSession;
