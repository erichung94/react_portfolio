import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleInputChange } = this.props;

        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Enter User Details" />
                        <TextField
                            hintText="Enter Your First Name"
                            floatingLabelText="First Name"
                            onChange={handleInputChange('firstName')}
                            defaultValue={values.firstName}
                        />
                        <TextField
                            hintText="Enter Your Last Name"
                            floatingLabelText="Last Name"
                            onChange={handleInputChange('lastName')}
                            defaultValue={values.lastName}
                        />
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default FormUserDetails