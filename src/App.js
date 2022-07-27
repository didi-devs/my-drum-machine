import React from 'react';
import './App.scss';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

 const soundName = {
   heaterKit: "Heater Kit",
   smoothPianoKit: "Smooth Piano Kit"
 }

 const soundGroup = {
   heaterKit: bankOne,
   smoothPianoKit: bankTwo
 }

const KeyboardKey = ({ play, sound: { id, keyTrigger, url, keyCode } }) => {


  const handleKeydown = (event) => {
    if (event.keyCode === keyCode) {
      play(keyTrigger, id)
  }
}
  
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown)
  },[] )

  return (
    
    <button className="drum-pad" onClick={() => play(keyTrigger, id)} >
      <div id="display">
        <audio id={keyTrigger} className="clip" src={url} />
        {keyTrigger}
      </div>
      </button>
    
  );
};
const Keyboard = ({ play , sounds}) => (
   <div className='keyboard'>
   {sounds.map((sound) => <KeyboardKey play={play} sound={sound} />)}
 </div>
)

const DrumControls = ({ name, secondGroup }) => (
  
  <div className="controle">
    <h2 id='display'>{name}</h2>
    <button onClick={secondGroup} id='switch'>Change Sound</button>
    </div>
  
)

function App() {
  const [soundsName, setSoundsName] = React.useState("");
   const [soundType, setSoundType] = React.useState("heaterKit");
   const [sounds, setSounds] = React.useState(soundGroup[soundType])

  const play = (keyTrigger, sound) => {
    setSoundsName("")
    const audio = document.getElementById(keyTrigger)
    audio.currentTime = 0;
    audio.play()
  } 
  
  const secondGroup = () => {
    if (soundType === "heaterKit") {
       setSoundType("smoothPianoKit")
       setSounds(soundGroup.smoothPianoKit)
    } else {
      setSoundType("heaterKit")
       setSounds(soundGroup.heaterKit)
      }
  }
  return (
    <div className="wrapper" id="drum-machine">
      <Keyboard play={play} sounds={sounds} />
      <DrumControls name={soundsName || soundName[soundType]}  secondGroup={secondGroup} />
    </div>
  );
}

export default App;
