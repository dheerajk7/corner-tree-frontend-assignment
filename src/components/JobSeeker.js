import React, { Component } from 'react';

class JobSeeker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      experience: '',
      job_search_function: '',
      job_search_location: '',
      resume: '',
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.showMessage(
      'There are 300 recruiters similar to your skills, would you like to “ review” or "broadcast"',
      'Review',
      'Broadcast'
    );
  };
  render() {
    const { name, email, phone } = this.state;
    console.log(this.state);
    return (
      <div className="form-container">
        <div className="heading">Job Seeker</div>
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
            <label>Fresher or Experienced :</label>{' '}
            <select
              name="items"
              id="experience"
              required
              onChange={this.handleChange}
            >
              <option disabled selected value>
                -- select an option --
              </option>
              <option value="Fresher">Fresher</option>
              <option value="Experienced">Experienced</option>
            </select>
          </div>

          <div className="form-item">
            <label>Job Search Function:</label>{' '}
            <select
              name="items"
              id="job_search_function"
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
            <label>Job Search Location:</label>{' '}
            <select
              name="items"
              id="job_search_location"
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

export default JobSeeker;
