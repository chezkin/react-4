import React , {useContext} from 'react'

import {TextContext} from '../../Context/TextContextProvider'

type Props = {}

const Child = (props: Props) => {
    const Context = useContext(TextContext);
  return (
    <h1>{Context?.text}</h1>
  )
}

export default Child