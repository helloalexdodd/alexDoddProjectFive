import React, {Component, Fragment} from 'react';
import firebase from './firebase';
import './App.css';
import Header from "./components/Header";
import Body from './components/Body';
import Form from './components/Form';
import Footer from "./components/Footer";
import DisplayResults from './components/DisplayResults';
import ErrorMessage from "./components/ErrorMessage";


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
    
    // this is where we need to do error handling, either all in this function, or in a seperate component if I can
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
      <div className="App wrapper">
        <Header />
        <Form
          handleChangeFunction={this.handleChange}
          value={this.state.userInput}
          onSubmit={this.handleClick}
          handleResetFunction={this.handleReset}
        />
        {this.state.searchResults.length > 0 && (
          <Fragment>
            <div className="resultsBox">
              <h3>
                The Compatibility Scale is a scale from 0 to 3 and is used
                to rate an food's overall effect on histamine levels in the
                body. The lower the number, the more compatible for people
                with Histamine Intolerance.
              </h3>
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
        <Footer />
      </div>
    );
  }
}

export default App;
