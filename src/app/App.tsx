import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {active: true}, [theme])}>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter/>
        </div>
    );
};

export default App;