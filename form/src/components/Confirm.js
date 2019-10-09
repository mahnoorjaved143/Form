import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const {values} = this.props
    return (
     <div>
        <h5>FirstName</h5>
        {values.firstName}
       <br/>
         <h5>LastName</h5>
        {values.lastName}
       <br/>
         <h5>Email</h5>
        {values.email}
       <br/>
         <h5>Occupation</h5>
        {values.occupation}
       <br/>
        <h5>City</h5>
        {values.city}
       <br/>
        <h5>Bio</h5>
        {values.bio}
       <br/>
       <br/>
        <button
           onClick={this.back}
            >Back
        </button> <br/>
        <button
           onClick={this.continue}
        >Confirm and continue
         </button>
        <br/>
     </div> 


    )
  }
}

export default Confirm;
