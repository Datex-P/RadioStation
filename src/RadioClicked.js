import {useContext } from 'react';
import minusSign from './Pics/minusSign.png';
import plusSign from './Pics/plusSign.png';
import { ThemeContext } from './ThemeContext';

function RadioClicked({
  index
}) {
 

  const {setElClicked, image, currentIndex, setCurrentIndex} = useContext(ThemeContext)



  // function Img () {
  //   <img
  //       className='radio-clicked__plus-minus-img'
  //       src={plusSign}
  //       alt='sign inside radio field to change radio station'
  //       onClick={(e) => {
  //         e.stopPropagation()
  //         setCurrentIndex(currentIndex + 1);
  //         // console.log(currentIndex, "currIndex here");
  //       }}
  //     />
  // }

  return (
    <div className='radio-clicked'>
      <img
        className='radio-clicked__plus-minus-img'
        src={minusSign}
        alt='clickable button to change radio station'
        onClick={(e) => {
          e.stopPropagation()
          setCurrentIndex(currentIndex - 1);
          setElClicked(false);
          // console.log(index, "current Ind");
        }}
      />
      <img className='radio-clicked__radio-img' src={image} alt='radio station that currently plays' />

      <img
        className='radio-clicked__plus-minus-img'
        src={plusSign}
        alt='clickable button to change radio station'
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
