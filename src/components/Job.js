import React, { Component } from 'react';
import Recruiter from '../components/Recruiter';
import JobSeeker from '../components/JobSeeker';

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div className="job-container">
        <div className="dropdown-container">
          <label for="items" className="label">
            Choose a Item :
          </label>
          <select
            name="items"
            id="activeItem"
            ref={this.dropdown}
            onChange={this.handleChange}
          >
            <option disabled selected value>
              -- select an option --
            </option>
            <option value="Job Seeker">Job Seeker</option>
            <option value="Recruiter">Recruiter</option>
          </select>
        </div>
        {activeItem === 'Recruiter' && (
          <Recruiter showMessage={this.props.showMessage} />
        )}
        {activeItem === 'Job Seeker' && (
          <JobSeeker showMessage={this.props.showMessage} />
        )}
      </div>
    );
  }
}

export default Job;
