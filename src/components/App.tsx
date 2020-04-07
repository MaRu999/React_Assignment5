import * as React from 'react';
import {NavContainer} from "./NavigationContainer";
import {useState} from "react";
import darkTheme from "../themes/darkTheme";
import lightTheme from "../themes/lightTheme";
import {ThemeProvider} from "styled-components";
import {Div, FillerDiv} from "./styledComponents";

export const App = (): JSX.Element => {

    const[checkDarkTheme, setCheckDarkTheme] = useState(false);

    const themeSwitch = (): void => {
        setCheckDarkTheme(!checkDarkTheme);
    };


    return (
        <ThemeProvider theme={checkDarkTheme ? darkTheme : lightTheme}>
            <Div>
            <label>Dark Theme
                <input type="checkbox" id="theme" name="themeBox" checked={checkDarkTheme} onClick={(): void => themeSwitch()}/>
            </label>
            <NavContainer isDarkTheme={checkDarkTheme} displayForm={true}/>
            </Div>
            <FillerDiv>
            </FillerDiv>
        </ThemeProvider>
    )
};
