import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
      <footer className="footerComponent">
        <p>
          All database information provided by the{" "}
          <a
            href="http://www.histaminintoleranz.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Swiss Interest Group Histamine Intolerance (SIGHI)
          </a>
        </p>
      </footer>
    );
	};
};

export default Footer