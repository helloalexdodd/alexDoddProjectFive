import React, {Component} from 'react';
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
      this.state.data[i][`Food name`].includes(lowerCaseInput) && this.state.userInput !== '' ? this.state.searchResults.push(this.state.data[i]) : this.setState({errorMessage: true})
    }

    this.setState({
      userInput: ""
    });    
  };

  render () {
    return (
      <div className="App wrapper">
        <Header />
        <div className="resultsBox">
          {this.state.searchResults.map(results => {
            return <DisplayResults results={results} />;
          })}
          {this.state.searchResults.length === 0 && (
              <p>{this.state.errorMessage}</p>
            )}
        </div>
        {this.state.searchResults.length === 0 && 
          !this.state.errorMessage && (
          <Body />
        )}
        {this.state.errorMessage &&
          this.state.searchResults.length === 0 && 
          <ErrorMessage />}
        <Form
          myFunction={this.handleChange}
          value={this.state.userInput}
          onClick={this.handleClick}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
