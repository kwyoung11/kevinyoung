import React from 'react';
import ReactDOM from 'react-dom';

const API = window.location.origin + '/api/nodes?node[type]=PostSite';

class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: ["test"]
		}
		console.log("const", this.state.posts);
	}

	componentDidMount() {
		fetch(API)
		.then(response => response.json())
		.then(data => {
			this.setState({
				posts: data.nodes
			});
		});
	}

	render() {
		const PostsList = function() {
			return this.state.posts.map((post, i) => {
				return <li> <a href={post.permalink}>{post.title}</a> </li>
			});	
		}.bind(this);
		
		return (
			<React.Fragment>
			     <h1 className="title">
        Bulma
      </h1>

      <p className="subtitle">
        Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
      </p>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Input"/>
        </div>
      </div>

      <div className="field">
        <p className="control">
          <span className="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>

      <div className="buttons">
        <a className="button is-primary">Primary</a>
        <a className="button is-link">Link</a>
      </div>
				<h2> Posts </h2>
				<ul>
					<PostsList/>
				</ul>
			</React.Fragment>
		);
	}
}

export default Posts;