import React from 'react';
import {Columns, Heading, Card, Media, Content} from 'react-bulma-components/full';
import Tasks from './Tasks.js';

const Users = (props) => {
    if (props.users === []){
        return(
            <p>Loading...</p>
        );
    }
    return(
        <Columns>
            <Columns.Column>
                <Heading size={2} className="has-text-centered">Users</Heading>
                {props.users.map(u =>
                    <Card>
                        <Card.Content>
                        <Media>
                            <Media.Item>
                            <Heading size={4}>{u.name} {u.last_name}</Heading>
                            <Heading subtitle size={6}>
                                {u.email}
                            </Heading>
                            </Media.Item>
                        </Media>
                        <Content>
                            <Heading size={4} className="has-text-centered">Tasks</Heading>
                            <Tasks ids = {u.id}/>
                        </Content>
                        </Card.Content>
                </Card>
                    ) 
                }
            </Columns.Column>
            
        </Columns>
    );
}

export default Users;