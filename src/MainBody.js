import React, {useState, useEffect} from 'react'
import CompClicked from './CompClicked'

function MainBody({setRadioClicked, setRadioStationClicked, elClicked, setElClicked}) {

  const [api, setApi] = useState('')
  // const [elClicked, setElClicked] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [image, setImage] = useState('')

  useEffect(()=>{

    fetch('https://teclead.de/recruiting/radios').then(obj=>obj.json()).then(data=>{
      setApi(data)
  
  }
  )
  }, [setApi])

  return (
    <div className='MainBodyContainer'>
    {api&&
    
    api.radios.map((el, index)=><div key={index} className='radioStyling' onClick={()=>{
    
        let image = el.image;
        let ind = image.search('Radio')
        // console.log(ind, 'ind radio here')
        let number = ['One', 'Two', 'Three', 'Four']
        let imageNew = image.slice(0, ind+5) + number[index]

        setElClicked(true)
        setCurrentIndex(index)
        setImage(imageNew)
        setRadioClicked(el.name)
        setRadioStationClicked(true)
      }
      }
      >
      
      <div className={elClicked? 'radioStation flexCol': 'radioStation'}>
      <div style={{position: 'relative'}}>
      {
        elClicked && index === currentIndex?
        
        <CompClicked image={image} index={index} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setElClicked={setElClicked}/> 
        :
        ''
      }
      </div>
      <div className='NameAndFrequency'><div>{el.name}</div> <div>{el.frequency}</div></div>
      
      </div>
      </div>)
     
    }
    </div>
  )
}

export default MainBody
