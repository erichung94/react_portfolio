import React, {
    Component
} from 'react'
import FormUserDetails from './FormUserDetails'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    nextStep = () => {
        const {
            step
        } = this.state;
        this.setState({
            step: step + 1
        });
    }

    previousStep = () => {
        const {
            step
        } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleInputChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const {
            step
        } = this.state;
        const {
            firstName,
            lastName,
            email,
            occupation,
            city,
            bio
        } = this.state;
        const values = {
            firstName,
            lastName,
            email,
            occupation,
            city,
            bio
        }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleInputChange={this.handleInputChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <h1> FormPersonalDetails </h1>
                )
            case 3:
                return (
                    <h1> Confirm </h1>
                )
            default:
                return (
                    <h1> Error </h1>
                )
        }
    }
}

export default UserForm