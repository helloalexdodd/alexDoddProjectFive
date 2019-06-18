import React, { Component } from "react";

class LengthError extends Component {
  render() {
    return (
      <div className="messageBox">
        <h3>
          Your search query must contain at least <span>3</span> characters.
        </h3>
      </div>
    );
  }
}

export default LengthError;
