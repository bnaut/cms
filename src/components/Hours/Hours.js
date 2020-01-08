import React from 'react';
import axios from 'axios';

class EditHours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({monday: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //axios.post('http://localhost:3000/github', {
    axios.post('https://rgms7e8f9l.execute-api.us-east-1.amazonaws.com/dev/github', {
      "monday": this.state.value
    }).then(response => {
      console.log('success')
      console.log(response)
    }).catch(error => {console.log(error)});



  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Monday: <input type="text" value={this.state.monday} onChange={this.handleChange} /></label>
        <br></br>
        <label>Tuesday: <input type="text" value={this.state.tuesday} onChange={this.handleChange} /></label>
        <br></br>
        <label>Wednesday: <input type="text" value={this.state.wednesday} onChange={this.handleChange} /></label>
        <br></br>
        <label>Thursday: <input type="text" value={this.state.thursday} onChange={this.handleChange} /></label>
        <br></br>
        <label>Friday: <input type="text" value={this.state.friday} onChange={this.handleChange} /></label>
        <br></br>
        <label>Saturday: <input type="text" value={this.state.saturday} onChange={this.handleChange} /></label>
        <br></br>
        <label>Sunday: <input type="text" value={this.state.sunday} onChange={this.handleChange} /></label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default EditHours;
