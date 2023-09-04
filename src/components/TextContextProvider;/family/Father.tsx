import React , {useContext, useRef , useState} from 'react'

import Child from './Child'
import {TextContext} from '../../Context/TextContextProvider'

import alarm from  '../../../../public/gitIZgit.mp3'

type Props = {}

const Father = (props: Props) => {
    const Context = useContext(TextContext);
    const refText = useRef<HTMLInputElement | null>(null);

    const audioRef = useRef<HTMLAudioElement>(null);

    const [isSoundPlaying, setIsSoundPlaying] = useState(false);

    const playSound = () => {
        if (!isSoundPlaying) {
            audioRef.current!.play(); 
            setIsSoundPlaying(true);
          } else {
            audioRef.current!.pause();
            audioRef.current!.currentTime = 0;
            setIsSoundPlaying(false);  
          }
    };
    const pauseSound = () => {
        audioRef.current!.pause();
            audioRef.current!.currentTime = 0;
            setIsSoundPlaying(false); 
    }

  return (
    <>
    <Child/>
    <input ref={refText} type="text" placeholder='enter some text'/>
    <button onClick={() => {
        Context?.setText(refText.current!.value)
        refText.current!.value === 'amit a gever' ? playSound() : pauseSound();
        }}>edit text</button>        
    <audio ref={audioRef}>
      <source src={alarm} type="audio/mpeg"/>
    </audio>

    </>
  )
}

export default Father