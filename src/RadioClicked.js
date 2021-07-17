import {useContext } from 'react';
import minusSign from './Pics/minusSign.png';
import plusSign from './Pics/plusSign.png';
import { ThemeContext } from './ThemeContext';

function RadioClicked({
  index
}) {
 

  const {setElClicked, image, currentIndex, setCurrentIndex} = useContext(ThemeContext)

  return (
    <div className='CompClickedContainer'>
      <img
        className='plusAndMinusSign'
        src={minusSign}
        alt='minusSign'
        onClick={(e) => {
          e.stopPropagation()
          setCurrentIndex(currentIndex - 1);
          setElClicked(false);
          // console.log(index, "current Ind");
        }}
      />
      <img className='ImageRadioApi' src={image} alt='imageRadio' />

      <img
        className='plusAndMinusSign'
        src={plusSign}
        alt='plusSign'
        onClick={(e) => {
          e.stopPropagation()
          setCurrentIndex(currentIndex + 1);
          // console.log(currentIndex, "currIndex here");
        }}
      />
    </div>
  );
}

export default RadioClicked;
