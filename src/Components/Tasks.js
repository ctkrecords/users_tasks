import React, {Component} from 'react';
import axios from 'axios';
import {Columns, Content, Box, Table} from 'react-bulma-components/full';

const Todo = (props) => {
    if (props.ids === []){
        return(
            <p>Loading...</p>
        );
    }
  
    return( 
        <Content>
            <p>{props.ids}</p>
            <Tasks />
        </Content>
    );    
}

class Tasks extends Component{
  constructor(props){
    super(props)
    this.state = {
      tasks: [],
    }
    //console.log(props.ids);
  }

  num = 1; 
  async componentDidMount() {
    await axios.all([
      axios.get('https://fake-user-todo-api.herokuapp.com/api/users/'+this.props.ids+'/todos'),
      console.log(this.props.ids),
      //console.log(this.num),
      ]).then(responseArr => {
        console.log(responseArr[0].data);
        //console.log(responseArr[1].data);
        this.setState({
          tasks: responseArr[0].data,
          //tasks: responseArr[1].data,
        }); 
      })
      .catch(error => console.log(error))    
    }

    render(){
      let {tasks = []} = this.state;
      return(
        <Box>
          <Columns>
            <Columns.Column>
              <Table>
                <tr>
                  <th>Tasks</th>
                  <th>State</th>
                </tr>
                
                  {tasks.map(t => 
                    <tr>
                      <td>{t.title}</td>
                      <td>{ t.completed? "Completado" : "Pendiente" }</td>
                    </tr>
                    )}                    
              </Table>
            </Columns.Column>
          </Columns>  
          <Box>
          <Columns>
            <Columns.Column>
              <p>Make a new task</p>
            </Columns.Column>                    
          </Columns>
        </Box>
        </Box>
      
      );
    }

}

export default Tasks;
 
