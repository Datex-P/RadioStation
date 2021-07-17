import React, {useContext} from 'react';
import { ThemeContext } from './ThemeContext';


function HeaderAndFooter({
  arrow, logout,
  className,
  renderPics,
}) {


const {radioClicked, radioStationClicked, setElClicked} = useContext(ThemeContext)


// function picsRender() {
//     <div>
//           <img
//             className='picsRender__arrow'
//             src={arrow}
//             alt='arrow img to move one level up'
//             onClick={() => {
//               setElClicked(false);
//             }}
//           />
//           <span className='picsRender__stations'>STATIONS</span>
//           <img className='picsRender__logout' src={logout} alt='logout img to log out of the application' />
//         </div>
//         console.log('hellihosfihopgrhihoioj')
// }

// function stationClicked () {
//   <div className='station-clicked'>
//           <span className='station-clicked__playing'>CURRENTLY PLAYING</span>
//           <span>{radioClicked}</span>
//         </div>
// }


  return (
    <div className={`${className}`}>
      {/* {
        renderPics ?
        picsRender()
        
        
       : 
       radioStationClicked ? 
        stationClicked()
       
       : 
        ''
       
      } */}
      {renderPics ? (
        <>
        <img
            className='picsRender__arrow'
            src={arrow}
            alt='arrow img to move one level up'
            onClick={() => {
              setElClicked(false);
            }}
          />
         <span className='picsRender__stations'>STATIONS</span>
          <img className='picsRender__logout' src={logout} alt='logout img to log out of the application' />
        </>
        
      ) :
      radioStationClicked ? (
        <div className='station-clicked'>
          <span className='station-clicked__playing'>CURRENTLY PLAYING</span>
          <span>{radioClicked}</span>
        </div>
      ) : (
        ''
      )
      
      }
    </div>
  );
}

export default HeaderAndFooter;
