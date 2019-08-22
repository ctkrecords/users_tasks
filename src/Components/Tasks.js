import React from 'react';
import axios from 'axios';
import {Columns, Content} from 'react-bulma-components/full';

const Tasks = (props) => {
    if (props.ids === []){
        return(
            <p>Loading...</p>
        );
    }
    return( 
        <Content>
            {
                props.ids.map(id =>
                    <p>{id.id}-</p>
                )
            }
        </Content>
    );
}

export default Tasks; 