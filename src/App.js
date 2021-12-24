import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, NavLink, useNavigate,Routes} from 'react-router-dom';
import Homepage from './Containers/Homepage/Homepage';
import LeftItemsComponent from './Containers/LeftSideMenu/leftItems.js';
import SideBarComponent from './Containers/SideBar/sideBar.js';
import PlayerComponent from './Containers/Player/player';
import axios from 'axios';

function App() {
      let navigateTo = useNavigate();
      
      React.useEffect((e) => {
         navigateTo('/1')
      },[])

      return(
        
              <div className="App">
                {/* <LeftItemsComponent/>
                <SideBarComponent/>
                <PlayerComponent/> */}
                <Routes>
                <Route path="/:id" element={<Homepage/>}/>
                </Routes>

              </div>
            


      )
}

// function App() {
//   return (
//     <BrowserRouter>

//       <div className="App">
//         <LeftItemsComponent/>
//         <SideBarComponent/>
//         <PlayerComponent/>

//       </div>

//     </BrowserRouter>
//   );
// }

export default App;
