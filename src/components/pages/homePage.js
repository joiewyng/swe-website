import React, {Component} from 'react';
import '../../default.css';
import Header from '../headerComponent/header'
class Homepage extends React.Component {
  render() {
    return(
        <div className="wrap">
             
            <div className="overlay">
                <div className="frontpage"></div>
                <Header />
                <div className="SWE-intro">   
                    <text>Society of Women Engineers</text>
                    <br/>
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
                        <span class="vertcenter-helper"></span><img src={require("../../images/fa19/2019-SWE-eboard.JPG")} id="infographic"></img>
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
                            <div className="highlight-image">
                            </div>
                            <div className="highlight-text">
                                <div className="highlight-title">SWEek of Welcome</div>
                                <div className="highlight-blurb">blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-4">
                        <div className="placeholder">

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="placeholder">

                        </div>
                    </div>
                </div>
            </div>
                
            
        </div>
    );
  }
}

export default Homepage;
