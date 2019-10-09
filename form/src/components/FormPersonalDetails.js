import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
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
                        placeholder="Occupation"   
                        label="occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                        />
                        <br/>

                        <TextField
                        placeholder="City"   
                        label="city"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                        />
                        <br/>   
                        <TextField
                        placeholder="Bio"   
                        label="bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                        />
                        <br/>
                        <RaisedButton
                        color="primary"
                        primary={true}
                        // variant="contained"
                        onClick={this.continue}
                        >Continue
                        </RaisedButton>

                        <RaisedButton
                        color="primary"
                        // variant="contained"
                        onClick={this.back}
                        primary={false}
                        >Back
                        </RaisedButton>
                        <br/>
                    </React.Fragment>
             
                </MuiThemeProvider>
               
            </div>
        )
    } 
}
export default FormPersonalDetails