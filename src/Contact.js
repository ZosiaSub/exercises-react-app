import React, { PureComponent } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class About extends PureComponent {

    render() {

        return (

            <div className="About">
                <Header title="Mój pierwszy Reakcik - Kontakt"/>
                <h1>Kontakt do mnie</h1>
                <Footer name="Zosia Subocz">
                </Footer>
            </div>
        );
    }
}

export default About;