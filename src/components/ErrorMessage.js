import React, { Component } from "react";

class ErrorMessage extends Component {
	render() {
		return(
			<div className="messageBox">
				<h3>It seems your search has come back empty. Here are some tips for bettering your search query.</h3>
				<ul>
					<li>This database primarily contains whole foods. So, while you may occasionally find more complex products (like mustard, for example) it is generally best practice to search for ingredients rather that products.</li>
					<li>Try making your searches broader. Instead of searching for Yukon Gold Potatoes, try just Potato.</li>
					<li>If you tried searching for items as a plural, try the singular version of that item, or vice versa.</li>
					<li>Double check your spelling!</li>
					<li>Maybe what you're looking for isn't in our database, in which case I encourage you to <a href="mailto:hello@alexdodd.com">email me</a> to suggest an addition.</li>
				</ul>
			</div>
		);
	};



};

export default ErrorMessage;
