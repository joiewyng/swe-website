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
                    <div className="subcontent">
                        <text> The Cornell Society of Women Engineers plans, coordinates, and advertises
                        interactive sessions for Cornell Engineering students to meet with visiting corporations.
                        These sessions provide students with opportunites to meet company representatives in an 
                        informal setting and are avenues for companies to recruit students for permanent and 
                        internship positions, increasing company recognition among students. They are open to 
                        all students on campus. </text>
                        <text> For those interested in hosting information sessions, please see our Company
                        Recruiter Brochure and our FAQ. To host an information session, please click on the
                        following button. </text>
                        <div class="host_button">
                            <Button variant="light" size ="lg">Host an Information Session</Button>
                        </div>
                        <text> For questions regarding company informations, please contact the Corporate Relations
                        directors at cornell.swe.cr@gmail.com. The SWE office is located at 162 Olin Hall, Ithaca, NY 14853.</text>
                    </div>
                </div>
        );
    }
}

export default InfoSession;
