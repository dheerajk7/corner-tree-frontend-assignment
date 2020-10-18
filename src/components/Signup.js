import React, { Component } from 'react';
import { showAlert } from '../helper/alert';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      showOtp: false,
      otp: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showOtp: true });
  };

  handleSubmitOTP = (e) => {
    e.preventDefault();
    if (this.state.otp !== '1234') {
      showAlert('Invalid OTP', 'Try Again', 'warning');
      return;
    } else {
      showAlert(
        'Registration Successfull',
        'Welcome to our platform',
        'success'
      );
      this.setState({ otp: '' });
      this.props.changeActiveItem('home');
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { name, email, phone, showOtp, otp } = this.state;
    return (
      <div className="job-container">
        {showOtp ? (
          <div className="form-container">
            <div className="heading">Submit OTP</div>
            <form>
              <div className="form-item">
                <label>Enter OTP :</label>
                <input
                  type="text"
                  placeholder="OTP"
                  id="otp"
                  required
                  onChange={this.handleChange}
                  value={otp}
                />
              </div>
              <button
                className="btn"
                type="submit"
                onClick={this.handleSubmitOTP}
              >
                Submit OTP
              </button>
            </form>
          </div>
        ) : (
          <div className="form-container">
            <div className="heading">Sign Up</div>
            <form>
              <div className="form-item">
                <label>Name :</label>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  required
                  onChange={this.handleChange}
                  value={name}
                />
              </div>
              <div className="form-item">
                <label>Email :</label>
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  required
                  onChange={this.handleChange}
                  value={email}
                />
              </div>
              <div className="form-item">
                <label>Phone :</label>
                <input
                  type="number"
                  placeholder="Phone"
                  id="phone"
                  required
                  onChange={this.handleChange}
                  value={phone}
                />
              </div>

              <button className="btn" type="submit" onClick={this.handleSubmit}>
                Sign Up
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Signup;
