
import React, { JSXElementConstructor, createContext, useState } from 'react';

type  TextContextType = {
    text:"light"| "dark";
    setText: React.Dispatch<React.SetStateAction<"light"| "dark">>;
    }

export const ThemeContext = createContext<TextContextType | null>(null);


type Props = {
    children: React.ReactNode;
}

const ThemeContextProvider: React.FC<Props> = (props)  =>  {
    const [text, setText] = useState<"light" | "dark">("light");

    return (
        <ThemeContext.Provider value={{text, setText}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider