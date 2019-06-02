import React, {Component} from "react";

class DisplayResults extends Component {
  render() {
    return (
        <div className="results">
          <h2>{this.props.results[`Food name`]}</h2>
          <h3>{`Compatability Scale:  ` + this.props.results[`Compatibility`]}</h3>
          <div className="safetyNotice">
            {this.props.results['Compatibility'] === 0 && (
              <p>This should be safe to consume!</p>
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
            {this.props.results['Compatibility'] === '?' && (
              <p>Insufficient or contradictory information</p>
            )}
            {this.props.results['Compatibility'] === '-' && (
              <p>No general statement possible</p>
            )}
          </div>
          
          {this.props.results[`Histamine`] === "?" ? <p><span>High Histamine Content:</span> Insufficient or contradictory information</p> :          
          this.props.results[`Histamine`] ? <p><span>High Histamine Content:</span> Yes</p> : <p><span>High Histamine Content:</span> No</p>}
          
          {this.props.results[`Liberator`] === "?" ? <p><span>Histamine Liberator:</span> Insufficient or contradictory information</p> :
          this.props.results[`Liberator`] ? <p><span>Histamine Liberator:</span> Yes</p> : <p><span>Histamine Liberator:</span> No</p>}
          
          {this.props.results[`Blocker`] === "?" ? <p><span>Enyme Blocker:</span> Insufficient or contradictory information</p> :          
          this.props.results[`Blocker`] ? <p><span>Enzyme Blocker:</span> Yes</p> : <p><span>Enzyme Blocker:</span> No</p>}
          
          {this.props.results[`Other amines`] === "?" ? <p><span>Other Biogenic Amines:</span> Insufficient or contradictory information</p> :          
          this.props.results[`Other amines`] ? <p><span>Other Biogenic Amines:</span> Yes</p> : <p><span>Other Biogenic Amines:</span> No</p>}
        </div>
    );
  }
}

export default DisplayResults;
