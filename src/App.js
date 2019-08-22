import React, {Component} from 'react';
import axios from 'axios';
import {Content} from 'react-bulma-components/full';
import './App.css';
import Users from './Components/Users.js';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      users: [],
      isLoaded: false,
    }
  }

  async componentDidMount() {
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
    }
  
    render(){
      let {users = [], isLoaded} = this.state;
      return (
        <div className="App">
          <Content>
            {isLoaded && <Users users = {users}/>}
          </Content>
        </div>
        
      ); 
    
    }

}

export default App;
