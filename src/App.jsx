import { StyledFooter } from "./setup/styled-components/styled_component";
import GlobalStyle from "./setup/styled-components/GlobalStyle";
import { isMobile } from "react-device-detect";

function App() {
        return (
                <>
                        <GlobalStyle />
                        <StyledFooter isMobile={isMobile}>
                                <section className='firstSection'>
                                        <section className='orangeBarLogoSection'>
                                                <span className='orangeBar'></span>
                                                <img
                                                        src='icons/logo.svg'
                                                        alt='Audiophile logo'
                                                        className='logo'
                                                />
                                        </section>
                                        <nav>
                                                <ul>
                                                        <li tabIndex={0}>
                                                                HOME
                                                        </li>
                                                        <li tabIndex={0}>
                                                                HEADPHONES
                                                        </li>
                                                        <li tabIndex={0}>
                                                                SPEAKERS
                                                        </li>
                                                        <li tabIndex={0}>
                                                                EARPHONES
                                                        </li>
                                                </ul>
                                        </nav>
                                </section>
                                <section className='secondeSection'>
                                        <article>
                                                <p>
                                                        Audiophile is an all in
                                                        one stop to fulfill your
                                                        audio needs. We're a
                                                        small team of music
                                                        lovers and sound
                                                        specialists who are
                                                        devoted to helping you
                                                        get the most out of
                                                        personal audio. Come and
                                                        visit our demo facility
                                                        - we’re open 7 days a
                                                        week.
                                                </p>
                                                <p className='copyRight'>
                                                        Copyright 2022. All
                                                        Rights Reserved
                                                </p>
                                        </article>
                                        <section className='logoSection'>
                                                <img
                                                        src='icons/icon-facebook.svg'
                                                        alt='facebook logo'
                                                        className='facebookLogo'
                                                />
                                                <img
                                                        src='icons/icon-twitter.svg'
                                                        alt='twitter logo'
                                                        className='twitterLogo'
                                                />
                                                <img
                                                        src='icons/icon-instagram.svg'
                                                        alt='instagram logo'
                                                        className='instagramLogo'
                                                />
                                        </section>
                                </section>
                        </StyledFooter>
                </>
        );
}

export default App;
