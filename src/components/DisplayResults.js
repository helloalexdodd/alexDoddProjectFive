import React, {Component} from "react";

class DisplayResults extends Component {
  render() {
    return (
      <div className="results" tabIndex="00">
        <div>
          <h2>{this.props.results[`Food name`]}</h2>
          <h3>
            {`Compatibility Scale:  `}
            <span>{this.props.results[`Compatibility`]}</span>
          </h3>
        </div>
        <div className="safetyNotice">
          {this.props.results["Compatibility"] === 0 && (
            <p>This should be safe to consume.</p>
          )}
          {this.props.results["Compatibility"] === 1 && (
            <p>
              There is some risk to consuming this if are you sensitive.
            </p>
          )}
          {this.props.results["Compatibility"] === 2 && (
            <p>
              This should not be consumed unless your symptoms are generally
              very mild.
            </p>
          )}
          {this.props.results["Compatibility"] === 3 && (
            <p>This should never be consumed.</p>
          )}
          {this.props.results["Compatibility"] === "?" && (
            <p>
              <span>Insufficient or contradictory information</span>.
            </p>
          )}
          {this.props.results["Compatibility"] === "-" && (
            <p>No general statement possible.</p>
          )}
        </div>

        {this.props.results[`Histamine`] === "?" ? (
          <p>
            High Histamine Content:{" "}
            <span>Insufficient or contradictory information</span>.
          </p>
        ) : this.props.results[`Histamine`] ? (
          <p>
            High Histamine Content: <span>Yes</span>
          </p>
        ) : (
          <p>
            High Histamine Content: <span>No</span>
          </p>
        )}

        {this.props.results[`Liberator`] === "?" ? (
          <p>
            Histamine Liberator:{" "}
            <span>Insufficient or contradictory information</span>.
          </p>
        ) : this.props.results[`Liberator`] ? (
          <p>
            Histamine Liberator: <span>Yes</span>
          </p>
        ) : (
          <p>
            Histamine Liberator: <span>No</span>
          </p>
        )}

        {this.props.results[`Blocker`] === "?" ? (
          <p>
            Enyme Blocker:{" "}
            <span>Insufficient or contradictory information</span>.
          </p>
        ) : this.props.results[`Blocker`] ? (
          <p>
            Enzyme Blocker: <span>Yes</span>
          </p>
        ) : (
          <p>
            Enzyme Blocker: <span>No</span>
          </p>
        )}

        {this.props.results[`Other amines`] === "?" ? (
          <p>
            Other Biogenic Amines:{" "}
            <span>Insufficient or contradictory information</span>
          </p>
        ) : this.props.results[`Other amines`] ? (
          <p>
            Other Biogenic Amines: <span>Yes</span>
          </p>
        ) : (
          <p>
            Other Biogenic Amines: <span>No</span>
          </p>
        )}
      </div>
    );
  }
}

export default DisplayResults;
