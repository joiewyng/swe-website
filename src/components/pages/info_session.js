import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import '../../default.css';
class InfoSession extends Component {

    render() {
        return (
            <div class="container-fluid">
                <div className="row row-container">
                    <text className="h1 row-heading"> Host an Information Session </text>
                </div>
                        <p> The Cornell Society of Women Engineers plans, coordinates, and advertises
                        interactive sessions for Cornell Engineering students to meet with visiting corporations.
                        These sessions provide students with opportunites to meet company representatives in an 
                        informal setting and are avenues for companies to recruit students for permanent and 
                        internship positions, increasing company recognition among students. They are open to 
                        all students on campus. </p>
                        <p> For those interested in hosting information sessions, please see our 
                        <strong> Company Recruiter Brochure</strong> 
                        and our
                        <strong> FAQ</strong>.
                        To host an information session, please click on the following button.
                        For questions regarding company informations, please contact the Corporate Relations
                        directors at cornell.swe.cr@gmail.com. The SWE office is located at 162 Olin Hall, Ithaca, NY 14853.</p>
                        <div id="host_button">
                            <Button variant="secondary">Host an Information Session</Button>{' '}
                        </div>
                </div>
        );
    }
}

export default InfoSession;
