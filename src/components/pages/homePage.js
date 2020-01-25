import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import '../../default.css';
import Header from '../headerComponent/header'
class Homepage extends Component {
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You've been added to the Cornell SWE Listserve!");
    }

    render() {
        return (
            <div className="wrap">

                <div className="overlay">
                    <div className="frontpage"></div>
                    <Header />
                    <div className="SWE-intro">
                        <text>Society of Women Engineers</text>
                        <br />
                        <text className="SWE-motto">Aspiring. Advancing. Achieving.</text>
                    </div>

                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 leftcol">
                            <div className="subheading">ABOUT US</div>
                            <h2> Who We Are</h2>
                            <div className="subcontent">
                                <text className="description">
                                    The Cornell Student Section of the Society of Women Engineers is
                                    open to all (male and female) undergraduate and graduate students in
                                    engineering and technical fields. Each year, we run numerous programs
                                    and events to promote engineering, diversity, career and professional
                                    development, academic support, and pre-college education.
                                </text>
                            </div>
                        </div>
                        <div className="col-lg-7 rightcol">
                            <span class="vertcenter-helper"></span><img alt="" src={require("../../images/fa19/2019-SWE-eboard.JPG")} id="infographic"></img>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mission">
                    <div className="row row-container ">
                        <text className="h2 row-heading"> Our Mission</text>
                        <div className="subcontent">
                            <text className="description row-description">
                                We promote women in Engineering by advocating
                                the importance of diversity and by uniting resources to
                        <span className="colored-text"> encourage academic, leadership,
                        professional, and personal excellence </span> for the entire
                                                                                                                                                                                                                                                                                                                                                                Engineering community of Today and Tomorrow.
                        </text>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">

                    <div className="h2 row-heading" id="highlight-header"> Event Highlights</div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="highlight-container">
                                <div className="highlight-image-1">
                                </div>
                                <div className="highlight-text">
                                    <div className="highlight-title">SWEek of Welcome</div>
                                    <div className="highlight-blurb">
                                        Welcome to Cornell Engineering and the Cornell SWE family! Each year Cornell SWE hosts a series of welcome socials
                                        during the first week of classes. Check out our 2019 event schedule to get an idea of what to look forward to.
                                </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="highlight-container">
                                <div className="highlight-image-2">
                                </div>
                                <div className="highlight-text">
                                    <div className="highlight-title">Women in Engineering Day</div>
                                    <div className="highlight-blurb">
                                        Hosted in conjunction with Cornell Days each April, SWE’s Women in Engineering Day is a series of events designed
                                        to welcome all newly admitted female engineering students.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="highlight-container">
                                <div className="highlight-image-3">
                                </div>
                                <div className="highlight-text">
                                    <div className="highlight-title">WE19 National Conference</div>
                                    <div className="highlight-blurb">
                                        At the annual Conference for Women Engineers, Cornell SWE leaders have the opportunity to attend
                                        workshops, keynote presentations, a career fair, and various other professional and personal development events.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a><strong id="read-more"><span className="arrow">Read more &nbsp; &#10230;</span></strong></a>
                        </div>
                    </div>
                </div>

                <div className="container-fluid join-swe">
                    <div className="row">
                        <div className="col-lg-5 leftcol">
                            <div className="subheading">GET INVOLVED</div>
                            <h2> Join Cornell SWE</h2>
                            <div className="subcontent">

                            </div>
                        </div>
                        <div className="col-lg-7 rightcol">
                            <text className="description">
                                Enter your Cornell netID to join our Listserve!
                                <form onSubmit={this.mySubmitHandler}>
                                    <input
                                        type="text"
                                    />
                                    <Button type="submit" variant="secondary">
                                        Submit
                                    </Button>

                                </form>
                            </text>
                        </div>
                    </div>
                </div>
                <div className="row-spacer"></div>


            </div>
        );
    }
}

export default Homepage;
