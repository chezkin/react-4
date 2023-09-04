import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

type Props = {
    titel : string;
    text : string;
}

const styleLight = { background: 'white', width: '600px', height: '200px', color: 'black' }
const styleDarck = { background: 'black', width: '600px', height: '200px', color: 'white' }

const DivDynamic = (props: Props) => {
    const Context = useContext(ThemeContext);
  return (
    
    <div style={Context?.text === "light" ? styleLight : styleDarck}>
        <h1>{props.titel}</h1>
        <p>{props.text}</p>
        </div>
  )
}

export default DivDynamic