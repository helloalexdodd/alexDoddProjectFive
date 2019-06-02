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
            value={this.props.userInput}
            onKeyPress={e => {
              if (e.key === "Enter") {
                this.props.onKeyPress(e);
              }
            }}
          />
          <button onClick={this.props.onClick}>Search</button>
          <button onClick={e => this.props.handleResetFunction(e)}>
            Reset
          </button>
        </div>
      </div>
    );
	}
}

export default Form