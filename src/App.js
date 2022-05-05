import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {

  //const [audioName, setAudioName] = useState(" ");
  
  //document.getElementById('display').innerHTML = audioName;

  document.addEventListener("keydown", function(event){
    switch(event.key) {
      case "Q": case "q":
        document.getElementById("Chord1").click();
        break;
      case "W": case "w":
        document.getElementById("Chord2").click();
        break;
      case "E": case "e":
        document.getElementById("Chord3").click();
        break;
      case "A": case "a":
        document.getElementById("Disc").click();
        break;
      case "S": case "s":
        document.getElementById("Break").click();
        break;
      case "D": case "d":
        document.getElementById("KickAndHat").click();
        break;
      case "Z": case "z":
        document.getElementById("PunchyKick").click();
        break;
      case "X": case "x":
        document.getElementById("SideStick").click();
        break;
      case "C": case "c":
        document.getElementById("Kick").click();
        break;
    } 
  });

  const playAudio = (audioId, audioName) => {
    document.getElementById(audioId).load();
    document.getElementById(audioId).play(); 
    document.getElementById('display').innerHTML = audioName;
  }

  return (
    <div className="App">
      <div className='drum-container' id='drum-machine'>
        <div className='div-display'>
          <p id='display'></p>
        </div>
        <div className='div-dp'> 
          <div className='div-dp_row'>
            <Button 
            variant='custom-1' className='drum-pad' id='Chord1' 
            onClick={() => {playAudio("Q", "Chord 1");}} 
            onMouseDown={e => e.preventDefault()}>
              Q
              <audio 
              className='clip' id="Q" 
              src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
              >
              </audio>
            </Button>
            <Button 
            variant='custom-1' className='drum-pad' id='Chord2' 
            onClick={() => {playAudio("W", "Chord 2");}} 
            onMouseDown={e => e.preventDefault()}>
              W
              <audio 
              className='clip' id="W" 
              src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3">
              </audio>
            </Button>              
            <Button 
            variant='custom-1' className='drum-pad' id='Chord3' 
            onClick={() => {playAudio("E","Chord 3");}} 
            onMouseDown={e => e.preventDefault()}>
              E
              <audio 
              className='clip' id="E" 
              src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3">
              </audio>
            </Button>
          </div>
          <div className='div-dp_row'>
            <Button 
            variant='custom-2' className='drum-pad' id='Disc' 
            onClick={() => {playAudio("A", "Disc");}} 
            onMouseDown={e => e.preventDefault()}>
              A
              <audio 
              className='clip' id="A" 
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">
              </audio>
            </Button>              
            <Button 
            variant='custom-2' className='drum-pad' id='Break' 
            onClick={() => {playAudio("S", "Break");}} 
            onMouseDown={e => e.preventDefault()}>
              S
              <audio 
              className='clip' id="S" 
              src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3">
              </audio>
            </Button>              
            <Button 
            variant='custom-2' className='drum-pad' id='KickAndHat' 
            onClick={() => {playAudio("D", "Kick and Hat");}} 
            onMouseDown={e => e.preventDefault()}>
              D
              <audio 
              className='clip' id="D" 
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">
              </audio>
            </Button>
          </div>
          <div className='div-dp_row'>
            <Button 
            variant='custom-3' className='drum-pad' id='PunchyKick' 
            onClick={() => {playAudio("Z", "Punchy kick");}} 
            onMouseDown={e => e.preventDefault()}>
              Z
              <audio 
              className='clip' id="Z" 
              src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3">
              </audio>
            </Button>              
            <Button 
            variant='custom-3' className='drum-pad' id='SideStick' 
            onClick={() => {playAudio("X", "Side Stick");}} 
            onMouseDown={e => e.preventDefault()}>
              X
              <audio 
              className='clip' id="X" 
              src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3">
              </audio>
            </Button>              
            <Button 
            variant='custom-3' className='drum-pad' id='Kick' 
            onClick={() => {playAudio("C", "Kick");}} 
            onMouseDown={e => e.preventDefault()}>
              C
              <audio 
              className='clip' id="C" 
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">
              </audio>
            </Button> 
          </div>        
        </div>
      </div>
    </div>
  );
}

export default App;
