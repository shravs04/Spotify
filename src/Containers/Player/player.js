import React from 'react';
import classes from './player.module.css';
import SearchIcon from '../../assets/Search.png';
import Dots from '../../assets/Dot.png';
import Ellipse from '../../assets/Ellipse.png';
import PlayListComponent from '../../Components/PlayListCard/playListCard';
import axios from 'axios';
import ArrowLeft from '../../assets/Arrowleft.png';
import Arrowcenter from '../../assets/Arrowcenter.png';
import Arrowright from '../../assets/Arrowright.png';
import Volume from '../../assets/Volume.png';
// import Pause from '../../assets/pausebutton.png';

class PlayerComponent extends React.Component{
    constructor(props){
        super(props);
        this.audioRef = React.createRef();
        this.state = {
            isPlayed: false
        }
    }

    componentDidUpdate(){
        this.audioRef.current.src = this.props.songData.url;
        this.audioRef.current.play();
    }
    
    
    render(){
        console.log(this.props.songData);

        return(
            <div className={classes.Player}>
                 <div className={classes.SongInfo}>
                      <p className={classes.Title}>{this.props.songData.title}</p>
                      <p className={classes.ColdPlay}>{this.props.songData.artist}</p>  
                 </div>

                 <div className={classes.Center}>
                      <img src={this.props.songData.photo} alt='Cover Image'/> 
                 </div>

                 {/* <div className={classes.Controls}>
                      <div className={classes.Group}>
                            <div className={classes.Frame}>
                                <img src={Dots} alt='Vector'/>
                            </div> 
                            <img className={classes.Ellipse} src={Ellipse} alt='Ellipse'/>
                      </div>
                        
                      <div className={classes.FrameTwo}>
                            <div className={classes.FrameCenter}><img src={ArrowLeft} alt='Vector Center'/></div>
                            <div className={classes.FrameCenter2}><img src={Arrowcenter} alt='Vector Center'/></div>
                            <div className={classes.FrameCenter3}><img src={Arrowright} alt='Vector Center'/></div>
                      </div>
                      <div className={classes.FrameThree}>
                            <img src={Volume} alt='Volume'/>
                      </div>
                 </div> */}
                 <audio ref={this.audioRef} autoplay controls src={this.props.songData.url}/>

            </div> 
        );
    }
}

export default PlayerComponent;