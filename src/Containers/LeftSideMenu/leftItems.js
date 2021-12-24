import React from 'react';
import Vector from '../../assets/Vector.png';
import Profile from '../../assets/Profile.png';
import classes from './leftItems.module.css';
import axios from 'axios';
import LeftListsComponent from '../../Components/LeftLists/leftLists';

// const LeftItemsComponent = (props) => {

//     let PlayListDataLeft = React.useState([]);

//     React.useEffect(() => {
//         axios.get('https://api.ss.dev/resource/api/playlists')
//         .then(res => {
//             console.log(res.data);
//             PlayListDataLeft = res.data;
//             console.log(PlayListDataLeft);
//         })
//         .catch(err => {
//             console.log("Something wrong",err.response);
//         })
//     }, [])


//     return( 
//         <div>
//            <img className={classes.VectorImg} src={Vector} alt='Spotify'/>

//            {/* <div className={classes.Categories}> */}
//                {/* <p className={classes.ForYou}>For You</p>
//                <p className={classes.TopTracks}>Top Tracks</p>
//                <p className={classes.Favourites}>Favourites</p>
//                <p className={classes.RecentlyPlayed}>Recently Played</p> */}
//                {
//                    PlayListDataLeft.map((item) => {
//                       console.log(PlayListDataLeft);
//                        console.log(item);
//                        return <LeftListsComponent key={item.id} titleList={item.title} id={item.id}/>
//                    })
//                }

//            {/* </div> */}

//            <img className={classes.ProfileImg} src={Profile} alt='Spotify'/>

//         </div> 
       
//     );
// }
class LeftItemsComponent extends React.Component{
    state = {
        Cards: [],
        // id: this.props.videoId
    }

    componentDidMount(){
        axios.get("https://api.ss.dev/resource/api/playlists")
        .then(response => {
            console.log(response.data);
            this.setState({Cards: [...response.data]});
        })
        .catch(err => {
            console.log("Call Failed");
        })
    };
    

    render(){

        return(
            // <Link to="/:vId" className={classes.PlaylistWrapper}>
            <div>
                <img className={classes.VectorImg} src={Vector} alt='Spotify'/>
                {
                   this.state.Cards.map(item => {
                     console.log(item);
                      return <LeftListsComponent key={item.id} id={item.id} title={item.title}/>
                   })
                }
                <img className={classes.ProfileImg} src={Profile} alt='Spotify'/>
            </div> 
            // </Link>
        );
    }
}

export default LeftItemsComponent;