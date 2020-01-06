import React from 'react';
import axios from 'axios';


class EditHours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //axios.post('http://localhost:3000/github', {
    axios.post('https://rgms7e8f9l.execute-api.us-east-1.amazonaws.com/dev/github', {
      "Monday": this.state.value
    }).then(response => {
      console.log('success')
      console.log(response)
    }).catch(error => {console.log(error)});



  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Set Monday's Hours:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default EditHours;
