
import { useState } from 'react'
import './App.css'
import './index.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getRandomElementArray from './utils/getRandomElementArray'

function App() {
  
const phraseRandom = getRandomElementArray(phrases)
const numberRamdom = getRandomElementArray([1, 2, 3, 4])

  const [quote, setQuote] = useState(phraseRandom)
  const [numberBg, setNumberBg] = useState(numberRamdom)

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`

  }



  

  return (
    <div className='container' style={bgStyle}>
    <h1 className='container__title'>Galletas De La Fortuna</h1>
    <Quote  phrase={quote}/>
    <BtnQuote 
    setQuote= {setQuote}
    phrases={phrases}
    setNumberBg={setNumberBg}
    />

    </div>
  )
}

export default App
