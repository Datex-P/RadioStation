import React from 'react'
import Arrow from './Pics/arrow.png'
import Logout from './Pics/logout.png'

function HeaderAndFooter({
  // Arrow, Logout, 
  className, renderPics, radioClicked, radioStationClicked,
setElClicked}) {

  console.log(Arrow, 'arrow here')
  return (
    <div className= {`${className}`}>

   
    {renderPics?
      <>
      <img className= 'ArrowStyling' src={Arrow} alt='arrow' onClick={()=>{setElClicked(false)}} />
      <span className='StationsStyling'>STATIONS</span>
      <img className= 'LogoutStyling' src={Logout} alt='logout' />
      </>
    :
    radioStationClicked?
    <div className='CurrentlyPlaying'>
    <span className='currentPlay'>CURRENTLY PLAYING</span> <span>{radioClicked}
    </span></div>
    : 
    ''
    }
    </div>
  )
}

export default HeaderAndFooter
