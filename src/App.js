import React, {Component, Fragment} from 'react';
import firebase from './firebase';
import Header from "./components/Header";
import Form from "./components/Form";
import Body from './components/Body';
import DisplayResults from "./components/DisplayResults";
import ErrorMessage from "./components/ErrorMessage";
import LengthError from "./components/LengthError";
import Footer from "./components/Footer";
import "./App.css";

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      userInput: "",
      searchResults: [],
      errorMessage: false,
      lengthError: false,
      user: null
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", results => {
      let foodItems = results.val().foodItems;

      let data = foodItems.map(item => {
        return item;
      });

      this.setState({
        data: data
      });
    });

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  handleChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  handleClick = e => {
    this.setState({
        searchResults: [],
        errorMessage: false,
        lengthError: false
      }, () => {
        const lowerCaseInput = this.state.userInput.toLowerCase();
				const lengthArray = this.state.userInput.split("");
				const searchResults = [];

				for (let i in this.state.data) {
					if (lengthArray.length < 3) {
						this.setState({ lengthError: true });
					} else if (this.state.data[i]["Food name"].includes(lowerCaseInput)) {
						searchResults.push(this.state.data[i]);
					} 

        this.setState({
          userInput: "",
        });
			}

			this.setState({ searchResults }, () => {	
				if (this.state.searchResults.length < 1 && lengthArray.length >= 3) {
					this.setState({
						errorMessage: true
					});
				}
			});
		});
    e.preventDefault();
  };

  login = () => {
    auth.signInWithRedirect(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  };

  render() {
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
						user={this.state.user}
						login={this.login}
						logout={this.logout}
          />
          {this.state.searchResults.length > 0 && (
            <Fragment>
              <div className="messageBox">
                <h3>
                  The Compatibility Scale is a scale from <span>0</span> to{" "}
                  <span>3</span> and is used to rate a food's overall effect on
                  histamine levels in the body. The lower the number, the more
                  compatible.
                </h3>
              </div>
              <div className="resultsBox">
                {this.state.searchResults.map(results => {
                  return <DisplayResults results={results} />;
                })}
              </div>
            </Fragment>
          )}
          {!this.state.errorMessage && !this.state.lengthError && this.state.searchResults.length < 1 && <Body />}
          {this.state.lengthError && <LengthError />}
          {this.state.errorMessage && <ErrorMessage />}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
