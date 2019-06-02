import React, {Component, Fragment} from 'react';
import firebase from './firebase';
import Header from "./components/Header";
import Form from "./components/Form";
import Body from './components/Body';
import DisplayResults from "./components/DisplayResults";
import ErrorMessage from "./components/ErrorMessage";
import Footer from "./components/Footer";
import "./App.css";


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      userInput: '',
      searchResults: [],
      errorMessage: false,
    }
  };

  componentDidMount() {
    const dbRef = firebase.database().ref();
    
    dbRef.on('value', (results) => {
      let foodItems = results.val().foodItems

      let data = foodItems.map((item) => {
        return item
      });

      this.setState({
        data: data,        
      })
    });
  };

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    
    let lowerCaseInput = this.state.userInput.toLowerCase();
    
    for (let i in this.state.data) {
      this.state.data[i][`Food name`].includes(lowerCaseInput) && this.state.userInput !== '' ? this.state.searchResults.push(this.state.data[i]) : this.state.searchResults.length === 0 ? this.setState({errorMessage: true}) : this.setState({errorMessage: true})
    }

    this.setState({
      userInput: '',
    });    
  };

  handleReset = (e) => {
    e.preventDefault();

    this.setState({
      searchResults: [],
      userInput: '',
      errorMessage: false
    });
  };

  render () {
    return (
      <Fragment>
        <div className="App wrapper">
          <Header />
          <Form
            handleChangeFunction={this.handleChange}
            value={this.state.userInput}
            onClick={this.handleClick}
            handleResetFunction={this.handleReset}
            onKeyPress={this.handleClick}
          />
          {this.state.searchResults.length > 0 && (
            <Fragment>
              <div className="messageBox">
                <h3>
                  The Compatibility Scale is a scale from <span>0</span> to{" "}
                  <span>3</span> and is used to rate an food's overall effect
                  on histamine levels in the body. The lower the number, the
                  more compatible it is for people with Histamine Intolerance.
                </h3>
              </div>
              <div className="resultsBox">
                {this.state.searchResults.map(results => {
                  return <DisplayResults results={results} />;
                })}
              </div>
            </Fragment>
          )}
          <div className="resultsBox">
            <p>{this.state.errorMessage}</p>
          </div>
          {this.state.searchResults.length === 0 &&
            !this.state.errorMessage && <Body />}
          {this.state.errorMessage &&
            this.state.searchResults.length === 0 && <ErrorMessage />}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
