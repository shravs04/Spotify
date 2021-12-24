import React from 'react';
import classes from './leftLists.module.css';
import {NavLink} from 'react-router-dom';

const LeftListsComponent = (props) => {
    // let tempVar = React.useState(false);
    // let idSend = React.useState('');

    return( 
        <NavLink className={classes.Categories} to={`/${props.id}`}>
            <div>
                <p className={classes.ForYou}>{props.title}</p>
            </div>
        </NavLink>
       
    );
}

export default LeftListsComponent;