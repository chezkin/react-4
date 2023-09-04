import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'


type Props = {}

const ThemeSwitcher = (props: Props) => {
    const Context = useContext(ThemeContext);
    return (
        <>
            <button onClick={
                () => {
                    Context?.text === "light" ? Context?.setText("dark") : Context?.setText("light")

                }
            }>
                ThemeSwitcher

            </button>

        </>
    )
}

export default ThemeSwitcher