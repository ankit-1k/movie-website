import React, { useEffect } from 'react'
import './style.css'
import Main from './Main'
import Typed from 'typed.js';
import Footer from './Footer';

const Home = () => {
    const flimflix = "FilmFlix"
    const hollywood = "Hollywood";
    const bollywood = "Bollywood";
    const south = "South";
    useEffect(() => {
        const options = {
            strings: [
                `Welcome to <span style="color: black;">${flimflix}</span> `,
                `Watch <span style="color: yellow;">${hollywood}</span> movies.`,
                `Watch <span style="color: black;">${bollywood}</span> movies.`,
                `Watch <span style="color: crimson;">${south}</span> movies.`
            ],
            typeSpeed: 70,
            loop: true
        };

        const typed = new Typed('.txt-anim', options);

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <div className="main-wrapper">
                <div className='home-body' >
                    <div className="heading">
                        <div className="wrapper">
                            <div className="head-txt">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <h3 class="animate-charcter">FilmFlix</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animated-txt">
                    <div className="txt-anim">
                        Welcome to FilmFlix.
                    </div>
                </div>
            </div>
            <div className="main">
                <Main />
            </div>
            <div className="footer-wrapper">
                <Footer />
            </div>
        </>
    )
}

export default Home
