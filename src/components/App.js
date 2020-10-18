import React, { Component } from 'react';
import '../styles/App.scss';
import Navbar from '../components/Navbar';
import Job from '../components/Job';
import ShowMessage from '../components/ShowMessage';
import SignUp from '../components/Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      showMessage: false,
      message: {
        value: '',
        button1: '',
        button2: '',
      },
    };
  }

  showSignUp = () => {
    this.setState({ activeItem: 'signup', showMessage: false });
  };

  showMessage = (value, button1, button2) => {
    this.setState({
      showMessage: true,
      message: {
        value,
        button1,
        button2,
      },
    });
  };

  hideMessage = () => {
    this.setState({ showMessage: false, value: '', button1: '', button2: '' });
  };
  changeActiveItem = (item) => {
    this.setState({ activeItem: item });
  };

  render() {
    const { activeItem, showMessage } = this.state;
    return (
      <div className="App">
        <div className="blank-space"></div>
        <Navbar changeActiveItem={this.changeActiveItem} />
        {activeItem === 'signup' ? (
          <SignUp changeActiveItem={this.changeActiveItem} />
        ) : (
          <Job showMessage={this.showMessage} />
        )}
        {showMessage && (
          <ShowMessage
            showSignUp={this.showSignUp}
            hideMessage={this.hideMessage}
            message={this.state.message}
          />
        )}
      </div>
    );
  }
}

export default App;
