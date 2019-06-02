import React, { Component } from "react";

class DisplayResults extends Component {
  render() {
    return (
        <div className="results">
          <h2>{this.props.results[`Food name`]}</h2>
          <h3>{`Compatability Ranking: ` + ` ` + this.props.results[`Compatibility`]}</h3>
          <div className="safetyNotice">
            {this.props.results['Compatibility'] === 0 && (
              <p>This is safe to consume!</p>
            )}
            {this.props.results['Compatibility'] === 1 && (
              <p>There is some risk to consuming this if are you very sensitive</p>
            )}
            {this.props.results['Compatibility'] === 2 && (
              <p>This should not be consumed unless your symptoms are generally very mild</p>
            )}
            {this.props.results['Compatibility'] === 3 && (
              <p>This should never be consumed</p>
            )}
          </div>
          {this.props.results[`Histamine`] ? <p>High Histamine Content: Yes</p> : <p>High Histamine Content: No</p>}
          {this.props.results[`Liberator`] ? <p>Histamine Liberator: Yes</p> : <p>Histamine Liberator: No</p>}
          {this.props.results[`Blocker`] ? <p>Enzyme Blocker: Yes</p> : <p>Enzyme Blocker: No</p>}
          {this.props.results[`Other amines`] ? <p>Other Biogenic Amines: Yes</p> : <p>Other Biogenic Amines: No</p>}
        </div>
    );
  }
}

export default DisplayResults;
