import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import { BrowserRouter, Link } from 'react-router-dom';
import image from '../assets/images/ericf-avatar.png';

const API = window.location.origin + '/api/nodes?node[type]=Post';
const PATH = '/blog/';

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		fetch(API)
		.then(response => response.json())
		.then(data => {
			this.setState({
				posts: data
			});
		});
	}

	render() {
		const PostsList = function() {
			return this.state.posts.map((post, i) => {
				return (
					<section className="post">
        	            <header className="post-header">
        	                <h2 className="post-title"><Link to={PATH + post.slug}>{post.title}</Link></h2>
	
        	                <p className="post-meta">
        	                    <a className="post-category post-category-js" href="#">JavaScript</a>
        	                </p>
        	            </header>
	
        	            <div className="post-description">
        	                <p dangerouslySetInnerHTML={{__html: post.body}}>
        	                </p>
        	            </div>
        	        </section>
				);
			});	
		}.bind(this);
		
		return (
			<Layout>
        	    <div className="posts">
        	        <h1 className="content-subhead">Recent Posts</h1>
        	        <PostsList />
        	    </div>
			</Layout>
		);
	}
}

export default Blog;