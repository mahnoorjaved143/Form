import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const {values, handleChange} = this.props
        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Enter User Details"/>
                        <br/>
                        <TextField
                        placeholder="Enter First Name"   
                        label="firstName"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        />
                        <br/>

                        <TextField
                        placeholder="Enter  Last Name"   
                        label="firstName"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        />
                        <br/>   
                        <TextField
                        placeholder="Enter your email address"   
                        label="firstName"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        />
                        <br/>
                        <RaisedButton
                        color="primary"
                        // variant="contained"
                        onClick={this.continue}
                        >Continue
                        </RaisedButton>
                        <br/>
                    </React.Fragment>
             
                </MuiThemeProvider>
               
            </div>
        )
    } 
}
export default FormUserDetails