import React, { Component } from 'react';

//Components
import SlideShow from './Components/Containers/Slideshow';

//Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="style-switch-wrapper">
        <div className="style-switch-button">
          <i className="fa fa-sliders"></i>
        </div>
        <h3>Style Options</h3>
        <button id="preset1" className="btn btn-sm btn-primary"></button>
        <button id="preset2" className="btn btn-sm btn-primary"></button>
        <button id="preset3" className="btn btn-sm btn-primary"></button>
        <button id="preset4" className="btn btn-sm btn-primary"></button>
        <button id="preset5" className="btn btn-sm btn-primary"></button>
        <button id="preset6" className="btn btn-sm btn-primary"></button>
        <br/><br/>
        <a className="btn btn-sm btn-primary close-styler pull-right" href="#" >Close X</a>
      </div>


      <div className="body-inner">
      <header id="header" className="navbar-fixed-top header2" role="banner">
		<div className="container">
			<div className="row">

				<div className="navbar-header">
				    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				    </button>
				    <div className="navbar-brand">
                <a href="index.html">
                  <img className="img-responsive" src="images/logo.png" alt="logo"/>
                </a> 
				    </div>                   
				</div>
				<nav className="collapse navbar-collapse clearfix" role="navigation">
					<ul className="nav navbar-nav navbar-right">
						<li className="dropdown active">
                       		<a href="#" className="dropdown-toggle" data-toggle="dropdown">Home <i className="fa fa-angle-down"></i></a>
                       		<div className="dropdown-menu">
								<ul>
		                            <li><a href="index.html">Home 1</a></li>
		                            <li className="active"><a href="index-2.html">Home 2</a></li>
		                            <li><a href="index-3.html">Home 3</a></li>
		                            <li><a href="index-4.html">Home 4</a></li>
		                        </ul>
	                    	</div>
	                    </li>
						<li className="dropdown">
                       		<a href="#" className="dropdown-toggle" data-toggle="dropdown">Company <i className="fa fa-angle-down"></i></a>
                       		<div className="dropdown-menu">
								<ul>
		                            <li><a href="about.html">About Us</a></li>
		                            <li><a href="service.html">Services</a></li>
		                            <li><a href="career.html">Career</a></li>
		                            <li><a href="testimonial.html">Testimonials</a></li>
		                            <li><a href="faq.html">Faq</a></li>
		                        </ul>
	                    	</div>
	                    </li>
						<li className="dropdown">
                       		<a href="#" className="dropdown-toggle" data-toggle="dropdown">Portfolio <i className="fa fa-angle-down"></i></a>
                       		<div className="dropdown-menu">
								<ul>
		                            <li><a href="portfolio-classic.html">Portfolio Classic</a></li>
		                            <li><a href="portfolio-static.html">Portfolio Static</a></li>
		                            <li><a href="portfolio-item.html">Portfolio Single</a></li>
		                        </ul>
	                    	</div>
	                    </li>
	                    <li className="dropdown">
                       		<a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down"></i></a>
                       		<div className="dropdown-menu">
								<ul>
		                           	<li><a href="team.html">Our Team</a></li>
		                           	<li><a href="about2.html">About Us - 2</a></li>
		                           	<li><a href="service2.html">Services - 2</a></li>
		                           	<li><a href="service-single.html">Services Single</a></li>
		                           	<li><a href="pricing.html">Pricing Table</a></li>
		                           	<li><a href="404.html">404 Page</a></li>
		                        </ul>
	                    	</div>
	                    </li>
	                    <li className="dropdown">
                       		<a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog <i className="fa fa-angle-down"></i></a>
                       		<div className="dropdown-menu">
								<ul>
		                           	 <li><a href="blog-rightside.html">Blog with Sidebar</a></li>
	                            	<li><a href="blog-item.html">Blog Single</a></li>
		                        </ul>
	                    	</div>
	                    </li>
	                    <li className="dropdown">
                       		<a href="#" className="dropdown-toggle" data-toggle="dropdown">Features <i className="fa fa-angle-down"></i></a>
                       		<div className="dropdown-menu">
								<ul>
		                           	 <li><a href="typography.html">Typography</a></li>
	                            	<li><a href="elements.html">Elements</a></li>
		                        </ul>
	                    	</div>
	                    </li>
            			<li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
              </div>
            </div>
          </header>
      </div>


      <SlideShow/>
      


      

      </div>
 
    );
  }
}

export default App;
