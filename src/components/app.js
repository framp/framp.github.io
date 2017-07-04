import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Contact from '../routes/contact';
import Experience from '../routes/experience';
import Blog from '../routes/blog';
import Article from '../routes/article';
import Projects from '../routes/projects';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Contact path="/" />
					<Experience path="/experience" />
					<Projects path="/projects" />
					<Blog path="/blog" />
					<Article path="/blog/:article" />
				</Router>
			</div>
		);
	}
}
