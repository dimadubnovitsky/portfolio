import React from 'react';
import style from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
