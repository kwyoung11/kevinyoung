import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import image from '../assets/images/ericf-avatar.png';

const API = window.location.origin + '/api/nodes/';

class BlogEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: [],
			id: props.match.params.id,
		}
	}

	componentDidMount() {
		fetch(API + this.state.id)
		.then(response => response.json())
		.then(data => {
			this.setState({
				post: data
			});
		});
	}

	render() {
		if (this.state.post == undefined) {
			return null;
		}
		const Post = () => {
			return (
				<section className="post">
        	        <header className="post-header">
        	            <h2 className="post-title">{this.state.post.title}</h2>
	
        	            <p className="post-meta">
        	                <a className="post-category post-category-js" href="#">{this.state.post.technologies}</a>
        	            </p>
        	        </header>
	
        	        <div className="post-description">
        	            <p dangerouslySetInnerHTML={{__html: this.state.post.body}}>
        	            </p>
        	        </div>
        	    </section>
			);
		};
		
		return (
			<Layout>
        	    <div className="posts">
        	        <h1 className="content-subhead">Recent Posts</h1>
        	        <Post />
        	    </div>
			</Layout>
		);
	}
}

export default BlogEntry;