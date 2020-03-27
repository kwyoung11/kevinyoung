import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import {IoIosArrowRoundForward} from 'react-icons/io';

const API = window.location.origin + '/api/nodes?node[type]=PortfolioEntry';
const PATH = '/portfolio/';

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
					<div className="PortfolioList__item">
						<div className="post">
        	        	    <header className="post-header">
        	        	        <h2 className="post-title">{entry.title}</h2>
								<span className="tags" dangerouslySetInnerHTML={{__html: entry.technologies.join(' <span class="dot">.</span> ')}}></span>
        	        	    </header>
        	        	    <img src={entry.screenshot_url}/>
        	        	    <div className="post-description" dangerouslySetInnerHTML={{__html: entry.summary}}></div>
        	        	</div>
                        <div className="overlay">
							<Link to={PATH + entry.slug}>learn more&nbsp;<IoIosArrowRoundForward /></Link>
						</div>
        	        </div>
				);
			});	
		}.bind(this);
		
		return (
			<Layout>
        	    <div className="posts Portfolio">
        	        <h1 className="content-subhead">Portfolio</h1>
        	        <div className="PortfolioList">
        	        	<EntriesList />
        	        </div>
        	    </div>
			</Layout>
		);
	}
}

export default Portfolio;