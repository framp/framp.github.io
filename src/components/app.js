import { h, Component } from "preact";
import { Router } from "preact-router";

import Contact from "../routes/contact";
import Bio from "../routes/bio";
import Projects from "../routes/projects";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  componentDidMount() {
    document.getElementById('app').classList.add('ready');
  }

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Contact path="/" />
          <Bio path="/bio" />
          <Projects path="/projects" />
        </Router>
      </div>
    );
  }
}
