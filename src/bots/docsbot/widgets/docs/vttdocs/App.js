import React, { useState, useEffect } from 'react'
import './App.css'
import node from './node';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function App() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  //const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  /*const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
  } */

  

  return (
    <>
      
      
      <div className="container">
        <div className="box">
          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
         
          <button onClick={() => setIsListening(prevState => !prevState)}>
            Voice 
            {note===null}
          </button>
         
<div>
         <p className="tt">
           {note === "can you help me"?"sure sir":null}
         </p>
         </div>
         <div>
         <p className="tt">
           {note === "book an appointment"?"ok. we have dr. Shrikant kulkarni, dr. Vaibhav Lunkad, dr. Taruna Madan, Dr. Preety Sahu":null}
         </p>
         </div>
         <div>
         <p className="tt">
           {note === "tell me about EMI"?"we have two cards : 1. Bajaj Finserv EMI Card 2. Bajaj Finserv Health EMI Card":null}
         </p>
         </div>
         <div>
         <p className="tt">
           {note === "Bajaj EMI card"?"enter your number":null}
         </p>
         </div>
         <div>
         <p className="tt">
           {note === "809 1011 890"?"enter password #WARNING : Password slot open for 90 seconds":null}
         </p>
         
         </div>
         <div>
         <p className="tt">
           {note === "123"?"Procesing.....":null}
         </p>
         
         
         </div>

         <div>
         <p className="tt">
           {note === "tell me about aarogya care"?"we have: ProHealth Solution, Super Health Solution, Health Plus Solution.":null}
         </p>
         
         
         </div>

         <div>
         <p className="tt">
           {note === "open Pro health solution"?"we have : 1) Benefits upto Rs 6000 2) Mutlitple visit Allows 3) No capping on individual usage":null}
         </p>
         
         
         </div>
         <div>
         <p className="tt">
           {note === "open super health solution"?"we have : 1) over 50 diagnostic tests 2) 3 variant so lab packages 3)benefits of upto Rs 4000":null}
         </p>
         
         
         </div>

          

         
     </div>
     </div>
    </>
  )
}

export default App
