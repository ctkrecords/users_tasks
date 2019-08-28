import React from 'react';
import axios from 'axios';
import {Columns, Heading, Box} from 'react-bulma-components/full';


class CreateUser extends React.Component{
    state = {
        name: '',
        email: '',
        last_name: ''
    }

    handleChange = event => {
        this.setState({
            name: event.target.name, 
            last_name: event.target.last_name,
            email: event.target.email
        })
        console.log(event.target.value)
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            last_name: this.state.last_name,
            email: this.state.email,
        };
        console.log(user);
        /*axios.post('https://fake-user-todo-api.herokuapp.com/api/users', {user})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => console.log(error))   */
    }

    render(){
        return(
          <Columns>
            <Columns.Column>
                <Heading size={2} className="has-text-centered">Create a new user</Heading>
                <Box>
                    <form>
                        <div className="field">
                            <label className="label has-text-left">Name</label>
                            <div class="control">
                                <input class="input is-rounded" name="name" type="text" placeholder="User name" required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left">Last name</label>
                            <div class="control">
                                <input class="input is-rounded" name="last_name" type="text" placeholder="User last name" required/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-left">Email</label>
                            <div class="control">
                                <input class="input is-rounded" name="email" type="email" placeholder="User email" required/>
                            </div>
                        </div>
                        <div className="field">
                            <div class="control">
                                <button class="submit button is-link" onClick={this.handleSubmit}>Create</button>
                            </div>
                        </div>
                    </form>                    
                </Box>
                
            </Columns.Column>
          </Columns>
        )
    }


}

export default CreateUser;

/*
 <Columns>
                <Field>
                    <Label>Name</Label>
                    <Control>
                    <Input placeholder="Text input" />
                    </Control>
                </Field>

                <Field>
                    <Label>Username</Label>
                    <Control>
                    <Input color="success" type="text" placeholder="Text input" value="bulma" />
                    </Control>
                    <Help color="success">This username is available</Help>
                </Field>

                <Field>
                    <Label>Email</Label>
                    <Control>
                    <Input color="danger" type="email" placeholder="Email input" value="hello@" />
                    </Control>
                    <Help color="danger">This email is invalid</Help>
                </Field>

                <Field kind="group">
                    <Control>
                    <Button type="primary">Submit</Button>
                    </Control>
                    <Control>
                    <Button color="link">Cancel</Button>
                    </Control>
                </Field>
            </Columns>
*/