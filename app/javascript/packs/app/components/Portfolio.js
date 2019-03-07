import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import image from '../assets/images/ericf-avatar.png';
import { BrowserRouter, Link } from 'react-router-dom';

const API = window.location.origin + '/api/nodes?node[type]=PortfolioEntry';
const PATH = window.location.origin + '/portfolio2/';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entries: undefined
		}
	}

	componentDidMount() {
		fetch(API)
		.then(response => response.json())
		.then(data => {
			this.setState({
				entries: data
			});
		});
	}

	render() {
		if (!this.state.entries) {
			return null;
		}

		const EntriesList = function() {
			return this.state.entries.map((entry, i) => {

				return (
					<Link to={PATH + entry.title} className="PortfolioList__entry">
						<section className="post">
        	        	    <header className="post-header">
        	        	        <h2 className="post-title">{entry.title}</h2>
								<span className="post-category post-category-js" href="#">{entry.technologies.join(" | ")}</span>
        	        	    </header>
        	        	    <img height="250" width="250" src={entry.screenshot_url}/>
        	        	    <div className="post-description" dangerouslySetInnerHTML={{__html: entry.summary}}></div>
        	        	</section>
        	        </Link>
				);
			});	
		}.bind(this);
		
		return (
			<Layout>
        	    <div className="posts PortfolioList">
        	        <h1 className="content-subhead">Portfolio</h1>
        	        <div className="PortfolioListContainer">
        	        	<EntriesList />
        	        </div>
        	    </div>
			</Layout>
		);
	}
}

export default Portfolio;