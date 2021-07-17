import React from 'react'
import HeaderAndFooter from './HeaderAndFooter'
import Arrow from './Pics/arrow.png'
import Logout from './Pics/logout.png'
import MainBody from './MainBody'
import './App.scss';
import  ThemeProvider  from './ThemeContext'


function App() {

  return (
    <div className='AppContainer'>

      <ThemeProvider>
        <HeaderAndFooter 
              arrow={Arrow} 
              logout={Logout} 
              renderPics 
              className='HeaderAndFooter Header'  
            />
          
        <MainBody 
        />

        <HeaderAndFooter 
            className='HeaderAndFooter Footer' 
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
