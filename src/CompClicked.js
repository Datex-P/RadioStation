import minusSign from './Pics/minusSign.png'
import plusSign from './Pics/plusSign.png'



function CompClicked({
  // Arrow, Logout,
   image, index, setCurrentIndex,
   setElClicked, currentIndex
  }) {

console.log(currentIndex, 'currentIndexIn compClicked')

  return (
    <div className='CompClickedContainer'>
        
                          <img
                            className="plusAndMinusSign"
                            src={minusSign}
                            alt='minusSign'
                            onClick={()=>{
                              setCurrentIndex(index-1);
                               setElClicked(false)
                            console.log(index, 'current Ind')
                            }}
                          />
                          <img 
                            className='ImageRadioApi'
                            src={image}
                            alt ='imageRadio'
                            />
                          
                          <img
                            className="plusAndMinusSign"
                            src={plusSign}
                            alt='plusSign'
                            onClick={()=>{
                              setCurrentIndex(index+1)
                              console.log(currentIndex, 'currIndex here')
                             // console.log()
                            }}
                          />
        
        </div>

  )
}

export default CompClicked
