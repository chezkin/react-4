
import React, { JSXElementConstructor, createContext, useState } from 'react';

type  TextContextType = {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    }

export const TextContext = createContext<TextContextType | null>(null);


type Props = {
    children: React.ReactNode;
}

const TextContextProvider: React.FC<Props> = (props)  =>  {
    const [text, setText] = useState<string>("hello world");

    return (
        <TextContext.Provider value={{text, setText}}>
            {props.children}
        </TextContext.Provider>
    )
}

export default TextContextProvider