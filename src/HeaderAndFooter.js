import React from "react";

function HeaderAndFooter({
  arrow, logout,
  className,
  renderPics,
  radioClicked,
  radioStationClicked,
  setElClicked,
}) {
  return (
    <div className={`${className}`}>
      {renderPics ? (
        <>
          <img
            className='ArrowStyling'
            src={arrow}
            alt='arrow'
            onClick={() => {
              setElClicked(false);
            }}
          />
          <span className='StationsStyling'>STATIONS</span>
          <img className='LogoutStyling' src={logout} alt='logout' />
        </>
      ) : radioStationClicked ? (
        <div className='CurrentlyPlaying'>
          <span className='currentPlay'>CURRENTLY PLAYING</span>
          <span>{radioClicked}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default HeaderAndFooter;
