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
            onChange={e => this.props.handleChangeFunction(e)}
            type="text"
            placeholder="E.g. Spinach"
            value={this.props.value}
            onKeyPress={e => {
              if (e.key === "Enter") {
                this.props.onKeyPress(e);
              }
            }}
            tabIndex="01"
          />
          <button onClick={this.props.onClick} tabIndex="02">Search</button>
					{this.props.user ? <button onClick={this.props.logout}>Log Out</button> : <button onClick={this.props.login}>Log In</button>}
        </div>
      </div>
    );
	}
}

export default Form