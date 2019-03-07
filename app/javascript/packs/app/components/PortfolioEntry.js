import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import image from '../assets/images/ericf-avatar.png';

const API = window.location.origin + '/api/nodes/';

class PortfolioEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entry: undefined,
			id: props.match.params.id.toLowerCase(),
		}
		console.log("HELLO?");
	}

	componentDidMount() {
		fetch(API + this.state.id)
		.then(response => response.json())
		.then(data => {
			this.setState({
				entry: data
			});
		});
	}

	render() {
		if (!this.state.entry) {
			return null;
		}
		const Entry = function() {
			return (
				<section className="post">
        	        <img className="main-image" src={this.state.entry.screenshot_url}/>
					<p dangerouslySetInnerHTML={{__html: this.state.entry.summary}}></p>
        	        <div className="post-description">
        	            <p dangerouslySetInnerHTML={{__html: this.state.entry.description}}></p>
        	        </div>
        	    </section>
			);
		}.bind(this);
		
		return (
			<Layout>
        	    <div className="posts PortfolioItem">
        	    	<div className="pure-g content-subhead">
        	    		<div className="pure-u-1">
        	    			<div className="pure-u-1-2">
        	    				<h1>{this.state.entry.title}</h1>
        	    				<span className="tags" dangerouslySetInnerHTML={{__html: this.state.entry.technologies.join(' <span class="dot">.</span> ')}}></span>
        	    			</div>
        	    			<div className="pure-u-1-2">
        	    				<div className="project-link">
        	    					<a href={this.state.entry.link}> Go to Project </a><i className="material-icons">open_in_new</i>
        	    				</div>
        	    			</div>
        	    		</div>
        	        </div>
        	        <Entry />
        	    </div>
			</Layout>
		);
	}
}

export default PortfolioEntry;