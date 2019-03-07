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
        	        <header className="post-header">
        	            <h2 className="post-title">{this.state.entry.title}</h2>
						<img src={this.state.entry.screenshot_url}/>
        	            <p className="post-meta">
        	                Tagged: <span className="post-category post-category-js" href="#">{Array.from(this.state.entry.technologies).join(" | ")}</span>
        	            </p>
        	        </header>
	
        	        <div className="post-description">
        	            <p dangerouslySetInnerHTML={{__html: this.state.entry.description}}>
        	            </p>
        	        </div>
        	    </section>
			);
		}.bind(this);
		
		return (
			<Layout>
        	    <div className="posts PortfolioEntry">
        	    	<div className="pure-g content-subhead">
        	    		<div className="pure-u-1">
        	    			<div className="pure-u-1-2">
        	    				<h1>{this.state.entry.title}</h1>
        	    			</div>
        	    			<div className="pure-u-1-2">
        	    				<div className="project-link">
        	    					<a href={this.state.entry.link}> Go to Project </a><i class="material-icons">open_in_new</i>
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