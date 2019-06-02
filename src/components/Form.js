import React, {Component} from 'react';

class Form extends Component {
	render() {
		return (
      <div className="formContainer">
        <div className="collectiveTextBox">
          <label htmlFor="textBox" className="visuallyHidden">
            Enter a food to find out more information.
          </label>
          <input
            onChange={e => this.props.myFunction(e)}
            type="text"
            placeholder="Ex. Spinach"
            value={this.props.userInput}
          />
          <button onClick={this.props.onClick}>Search</button>
        </div>
      </div>
    );
	}
}

export default Form