import React from 'react';
import axios from 'axios';
import Text from '../Inputs/Text/Text';

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
        <Text label="Monday" labelid="Monday" />
        <Text label="Tuesday" labelid="tuesday" />
        <Text label="Wednesday" labelid="Wednesday" />
        <Text label="Thursday" labelid="Thursday" />
        <Text label="Friday" labelid="Friday" />
        <Text label="Saturday" labelid="Saturday" />
        <Text label="Sunday" labelid="Sunday" />
        {/*<label>Monday: <input type="text" value={this.state.monday} onChange={this.handleChange} /></label>*/}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default EditHours;
