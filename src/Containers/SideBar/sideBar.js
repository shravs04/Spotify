import React from 'react';
import classes from './sideBar.module.css';
import SearchIcon from '../../assets/Search.png';
import PlayListComponent from '../../Components/PlayListCard/playListCard';
import axios from 'axios';

const SideBarComponent = (props) => {

    const [playListData,setPlayListData] = React.useState([]);
    // let idReceived = React.useState(window.location.pathname);

    React.useEffect(() => {
        console.log(typeof props.songsId);
        axios.get('https://api.ss.dev/resource/api/songs/'+props.songsId)
        .then(res => {
            console.log(res.data);
            setPlayListData(res.data);
        })
        .catch(err => {
            console.log("Something wrong",err.response);
        })
    }, [props.songsId])


    return( 
        <div className={classes.SideBarComp}>
        <p className={classes.TitleForYou}>{props.songsId == '1' ? 'For You': props.songsId == '2' ? 'Top Tracks': props.songsId == '3' ? 'Favourites': 'Recently Played'}</p>

        
        <input className={classes.SearchDiv} type="text" placeholder='Search Song, Artist'>
           
        </input>
        <div className={classes.Frame}><img className={classes.FrameVector} src={SearchIcon} alt="Icon"/></div>

        <div className={classes.PlayList}>
            {
                playListData.map((e,index) => {
                    console.log(e);
                    return <PlayListComponent setCurrentSong={props.setCurrentSong} key={e._id} indVal={index+1} duration={e.duration} url={e.url} artist={e.artist} title={e.title} photo={e.photo} artist={e.artist} />
                })
            }
                
        </div>

</div> 
       
    );
}

// class SideBarComponent extends React.Component{
//     state = {
//         Cards: [],
//         idReceived: window.location.pathname
        
//     }

//     componentDidUpdate(){
//         console.log(this.state.idReceived);
//         axios.get('https://api.ss.dev/resource/api/songs'+this.state.idReceived)
//         .then(response => {
//             console.log(response.data);
//             this.setState({Cards: [...response.data]});
//         })
//         .catch(err => {
//             console.log("Call Failed");
//         })
//     };
    

//     render(){

//         return(
//             <div className={classes.SideBarComp}>
//                 <p className={classes.TitleForYou}>{this.state.idReceived == '/1' ? 'For You': this.state.idReceived == '/2' ? 'Top Tracks': this.state.idReceived == '/3' ? 'Favourites': 'Recently Played'}</p>

                
//                 <input className={classes.SearchDiv} type="text" placeholder='Search Song, Artist'>
                   
//                 </input>
//                 <div className={classes.Frame}><img className={classes.FrameVector} src={SearchIcon} alt="Icon"/></div>

//                 <div className={classes.PlayList}>
//                     {
//                         this.state.Cards.map((e,index) => {
//                             console.log(e);
//                             return <PlayListComponent key={e._id} indVal={index+1} duration={e.duration} artist={e.artist} title={e.title} photo={e.photo} artist={e.artist} />
//                         })
//                     }
                        
//                 </div>

//         </div> 
//         );
//     }
// }



export default SideBarComponent;