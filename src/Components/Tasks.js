import React from 'react';
import axios from 'axios';
import {Columns, Content} from 'react-bulma-components/full';

const Todo = (props) => {
    if (props.ids === []){
        return(
            <p>Loading...</p>
        );
    }
    /*async componentDidMount() {
        await axios.all([
          axios.get('https://fake-user-todo-api.herokuapp.com/api/users'),
          ]).then(responseArr => {
            console.log(responseArr[0].data);
            //console.log(responseArr[1].data);
            this.setState({
              users: responseArr[0].data,
              //tasks: responseArr[1].data,
              isLoaded: true,
            }); 
          })
          .catch(error => console.log(error))    
        }*/
    console.log(props.ids);
    return( 
        <Content>
            <p>Hola xd</p>
        </Content>
    );
}

export default Todo; 