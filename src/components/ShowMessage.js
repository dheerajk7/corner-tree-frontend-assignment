import React, { Component } from 'react';

class ShowMessage extends Component {
  render() {
    const { value, button1, button2 } = this.props.message;
    return (
      <div className="message-container">
        <h3>{value}</h3>
        <div className="button-container">
          <button onClick={this.props.hideMessage}>{button1}</button>
          <button onClick={this.props.showSignUp}>{button2}</button>
        </div>
      </div>
    );
  }
}

export default ShowMessage;
