import React, { useEffect, useState } from 'react';
import LeftItemsComponent from '../LeftSideMenu/leftItems.js';
import PlayerComponent from '../Player/player.js';
import SideBarComponent from '../SideBar/sideBar.js';
import {useParams} from 'react-router-dom';

function Homepage() {
    let [currentSong, setCurrentSong] = useState({url: 'https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3', title: 'Starboy', duration: 320, artist: 'Weeknd', photo:'https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg'});

    let {id} = useParams();
    console.log(id); 

    return (
      <div>
        <LeftItemsComponent/>
        <SideBarComponent setCurrentSong={setCurrentSong} songsId={id}/>  
        <PlayerComponent songData={currentSong}/>
      </div>
    );
  }
  
  export default Homepage;