import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './pages/styles/index.scss'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {active: true}, [theme])}>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={<div>LOADING</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;