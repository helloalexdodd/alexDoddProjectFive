import React, {Component} from 'react';
import firebase from './firebase';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      userInput: '',
    }
  };

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (results) => {
      const newState = Object.entries(results.val());
      const data = newState.map((item) => {
        for (let i in item[1]) {        
          let foodItems = item[1][i];
          return foodItems
        }
      });

      this.setState({
        data: data
      })
    });
  };

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    })
  };

  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      userInput: ''
    })
  };

  searchDatabase = () => {
    // const dbRef = firebase.database().ref();



  };

  render () {
    return (
      <div className="App wrapper">
        <Header />
        <div className="formContainer">
          <div className="collectiveTextBox">
            <label htmlFor="textBox" className="visuallyHidden">Enter a food to find out more information.</label>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Ex. Spinach"
              value={this.state.userInput}
            />
            <button onClick={this.searchDatabase}>Search</button>
            <ul>
              {/* {this.state.data.map((foodItem) => {
                return (
                  <li key={foodItem}>
                    <p>{foodItem}</p>
                  </li>
                )
              })} */}
            </ul>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
