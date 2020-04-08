import React, {Component} from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "", 
      email: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <form>
        <label>
          Name:
          <input 
            type="text" 
            value={this.state.firstName} 
            onChange={this.handleChange}
            name="firstName"
          />
        </label>
        <label>
          Email:
          <input 
            type="text" 
            value={this.state.email} 
            onChange={this.handleChange}
            name="email"
          />
        </label>
      </form>
    )
  }
}

export default Form;