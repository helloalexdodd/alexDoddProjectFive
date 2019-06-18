import React, {Component} from 'react';

class Header extends Component {
	render() {
		return (
      <header className="headerComponent">
        <h1>Histamine Intolerance</h1>
        <h2>Food Compatibility Database</h2>
				<p>Enter a food item to get more information.</p>
      </header>
    );
	};
};

export default Header