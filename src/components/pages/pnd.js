import React, { Component } from 'react';
import '../../default.css';

class NetworkingDinner extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid purple_header">
                    <div className="row subtitle">
                        <h1 className="row-heading" id="host_title">Professional Networking Dinner</h1>
                        <div>
                            <p>
                            The Cornell University Society of Women Engineers proudly presents our semiannual Professional 
                            Networking Dinner in the Statler Ballroom. Held the evening before Cornell's technical career fair,
                            the Professional Networking Dinner enables company representatives and students to interact in an 
                            intimate yet relaxed environment. This allows representatives to share personal and business experiences 
                            while seeing first-hand just what Cornell has to offer. Students have the opportunity to speak to 
                            representatives for an extended period of time and to learn more about the workplace environment of 
                            many top engineering companies. We cordially invite you to join us for this unique networking opportunity.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pnd_section">
                    <div className="row">
                        <div className="col-lg-7 leftcol">
                            <h2> Company Representatives </h2>
                            <div className="subcontent">
                                <p className="description">
                                The event will cost $200.00 for the first company representative and $180.00 for each additional representative. 
                                Please note that each company is limited to a maximum of 4 company representatives. Companies may also choose 
                                to purchase an advertisement to be included in the program. Half page ads (5"x4") cost $50 and full page ads 
                                (5"x 8") cost $70. Dinner and four networking rotations will allow you to meet a wide variety of students in a 
                                casual and friendly atmosphere. Representatives are invited to stay an additional half hour, until 10:00pm, 
                                for further networking. This is a wonderful opportunity to get to know potential full-time and internship 
                                applicants prior to the career fair.
                                </p>
                                <p className="description">
                                Any company with questions regarding the event may direct their inquiries to cornellswe.pnd@gmail.com.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 rightcol">
                        <span class="vertcenter-helper"></span>
                        <img alt="Professional networking dinner image" src={require("../../images/corporate/pnd_img1.jpg")} class="dinner_img"></img>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pnd_section">
                    <div className="row">
                        <div className="col-lg-7 leftcol">
                            <h2> Students </h2>
                            <div className="subcontent">
                                <p className="description">
                                Tickets are $15 and may be purchased online with a credit card. The dinner consists of a four course meal catered by 
                                The Statler, with four rotations, during which you will be able to network with different companies in a relaxed environment. 
                                Additionally, there will be a short networking session prior to the start of the official rotations, and a thirty minute
                                networking session at the end of the night so that you will have the opportunity to speak to any representatives that you may
                                 have missed, or would like to talk to again. This is a great way to meet company reps and find a summer internship, co-op, 
                                or full time job.
                                </p>
                                <p className="description">
                                Student registration for Spring 2020 is now closed.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 rightcol">
                        <span class="vertcenter-helper"></span>
                        <img alt="Professional networking dinner image" src={require("../../images/corporate/pnd_img2.jpg")} class="dinner_img"></img>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <p className="description pnd_contact"
                        >If you have any questions regarding the event, please feel free to contact the SWE Career Development Co-Directors, 
                        Rema Toopal and Caroline Hanson at <strong>cornellswe.pnd@gmail.com</strong>. We look forward to seeing you at the event!</p>
                </div>
            </div>
        );
    }
}

export default NetworkingDinner;
