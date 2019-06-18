import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
      <footer>
				<div className="creator wrapper">
					<p>
						Created by{" "}
						<a
							className="underlineAnimation"
							href="https://www.alexdodd.ca"
							target="_blank"
							rel="noopener noreferrer"
						>
							Alex Dodd
              </a>
					</p>
					<a
						aria-label="Go to Github page"
						href="https://github.com/helloalexdodd/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-github" />
					</a>
					<a
						aria-label="Go to LinkedIn page"
						href="https://www.linkedin.com/in/helloalexdodd/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-linkedin" />
					</a>
					<a
						aria-label="Go to Twitter page"
						href="https://twitter.com/helloalexdodd"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-twitter" />
					</a>
				</div>
        <div className="footerBar wrapper">
					<p>
						All database information provided by the{" "}
						<a
							className="underlineAnimation"
							href="http://www.histaminintoleranz.ch"
							target="_blank"
							rel="noopener noreferrer"
						>
							Swiss Interest Group Histamine Intolerance (SIGHI)
          	</a>
					</p>
        </div>
      </footer>
    );
	};
};

export default Footer