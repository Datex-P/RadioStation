import React, {useState} from 'react'
import HeaderAndFooter from './HeaderAndFooter'
import Arrow from './Pics/arrow.png'
import Logout from './Pics/logout.png'
import MainBody from './MainBody'
import './App.scss';


function App() {
 
  const [radioClicked, setRadioClicked] = useState('')
  const [radioStationClicked, setRadioStationClicked] = useState('')
  const [elClicked, setElClicked] = useState(false)

  return (
    <div className='AppContainer'>
        <HeaderAndFooter 
              arrow={Arrow} 
              logout={Logout} 
              renderPics 
              className='Header'  
              elClicked={elClicked}  
              setElClicked={setElClicked}
          />
          
        <MainBody 
            setRadioClicked={setRadioClicked} 
            radioStationClicked={radioStationClicked} 
            radioClicked={radioClicked} 
            setRadioStationClicked={setRadioStationClicked}
            elClicked={elClicked}  
            setElClicked={setElClicked}
        />

        <HeaderAndFooter 
            className='Footer' 
            radioClicked={radioClicked} 
            radioStationClicked={radioStationClicked} 
        />
    </div>
  );
}

export default App;
