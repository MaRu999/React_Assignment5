import * as React from 'react';
import {NavContainer} from "./NavigationContainer";
import {useState} from "react";
import darkTheme from "../themes/darkTheme";
import lightTheme from "../themes/lightTheme";
import {ThemeProvider} from "styled-components";
import {Div, FillerDiv} from "./styledComponents";

export const App = (): JSX.Element => {

    const [theme, setTheme] = useState("light");

    const changeTheme = (): void => {
        setTheme((theme === "light" ? "dark" : "light"))
    };

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <Div>
                <label>Dark Theme
                    <input type="checkbox" id="theme" name="themeBox" checked={theme === "dark"}
                           onClick={(): void => changeTheme()}/>
                </label>
                <NavContainer themeName={theme} displayForm={true}/>
            </Div>
            <FillerDiv>
            </FillerDiv>
        </ThemeProvider>
    )
};
