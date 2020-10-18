import React, { Component } from 'react';

class Recruiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      preferred_function: '',
      preferred_location: '',
      major_area: '',
      blue_collar_workforce: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.showMessage(
      'recommended a “job posting” for better reach, click to "post a job"',
      'Cancle',
      'Post a Job'
    );
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { name, email, phone, company } = this.state;
    return (
      <div className="form-container">
        <div className="heading">Recruiter</div>
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
          <div className="form-item">
            <label>Company :</label>
            <input
              type="text"
              placeholder="Company"
              id="company"
              required
              onChange={this.handleChange}
              value={company}
            />
          </div>

          <div className="form-item">
            <label>Preferred Function Function:</label>{' '}
            <select
              name="items"
              id="preferred_function"
              onChange={this.handleChange}
              required
            >
              <option disabled selected value>
                -- select an option --
              </option>
              <option value="Java Developer">Java Developer</option>
              <option value="React Developer">React Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
          </div>

          <div className="form-item">
            <label>Preferred Location:</label>{' '}
            <select
              name="items"
              id="preferred_location"
              onChange={this.handleChange}
            >
              <option disabled selected value>
                -- select an option --
              </option>
              <option value="Indore">Indore</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>

          <div className="form-item">
            <label>Upload Resume :</label>
            <input
              type="file"
              placeholder="Resume"
              id="resume"
              required
              onChange={this.handleChange}
            />
          </div>
          <button className="btn" type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Recruiter;
