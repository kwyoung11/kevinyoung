import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';
import { BrowserRouter, Link } from 'react-router-dom'
import mugshot from '../assets/images/mugshot';

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}
  	render() {
  	  return (
  	  	<div id="layout">
  	  		<div className="sidebar pure-u-1 pure-u-md-1-4">
    		    <div className="header">
    		        <h1 className="brand-title"><Link to="/">Kevin Young</Link></h1> <img width="96" height="96" className="mugshot" src={mugshot}/>
    		        <h2 className="brand-tagline">Full Stack Developer</h2>

					<h3> Founder, <a href="https://wwww.strengthify.com">strengthify.com</a> </h3>
    		        <nav className="nav">
    		            <ul className="nav-list">
    		                <li className="nav-item">
    		                	<a href="mailto:kevin.william.young18@gmail.com">Contact</a>
    		                </li>
    		                <li className="nav-item">
    		                    <Link to="/blog">Blog</Link>
    		                </li>
    		                <li className="nav-item">
    		                    <Link to="/portfolio">Portfolio</Link>
    		                </li>
    		            </ul>
    		        </nav>
    		    </div>
    		</div>
    		<div className="content pure-u-1 pure-u-md-3-4">
        		<div>
        			{this.props.children}
            	</div>

            	<div class="footer">
            	    <div class="pure-menu pure-menu-horizontal">
            	        <ul>
            	            <li className="pure-menu-item"><a href="http://twitter.com/kyoung_dev/" className="pure-menu-link">Twitter</a></li>
            	            <li className="pure-menu-item"><a href="http://github.com/kwyoung11" className="pure-menu-link">GitHub</a></li>
            	            <li className="pure-menu-item"><a href="http://linkedin.com/in/kevwy" className="pure-menu-link">LinkedIn</a></li>
            	        </ul>
            	    </div>
            	</div>
       	 	</div>
    	</div>
  	  );
  	}
}

export default Layout;