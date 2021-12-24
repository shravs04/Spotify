import React from 'react';
import classes from './playListCard.module.css';
import SearchIcon from '../../assets/Search.png';
import {NavLink} from 'react-router-dom';

const PlayListComponent = (props) => {
    let idNew = React.useState('');

    return( 
        // <NavLink to={`/${props.indVal}`}>
        <div onClick={() => props.setCurrentSong({url: props.url, title: props.title, duration: props.duration, artist: props.artist, photo:props.photo})} className={classes.PlayListCard}>
            <div className={classes.LeftItem}>
                <img className={classes.Thumbnai} src={props.photo} alt='Music Thumbnail'/>
                <div className={classes.FrameTitles}>
                    <p className={classes.Sparks}>{props.title}</p>
                    <p className={classes.ColdPlay}>{props.artist}</p>
                </div>
            </div>
            <p className={classes.FrameTime}>{props.duration}</p>

        </div> 
        // </NavLink>
       
    );
}

export default PlayListComponent;