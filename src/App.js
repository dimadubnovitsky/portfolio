import React from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Particles from 'react-particles-js';

const particlesOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

const App = () => {
    return (
        <div className={styles.app}>
            <Particles className={styles.particles} params={particlesOpt}/>
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
