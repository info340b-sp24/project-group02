import React from 'react';
import {Header} from './HeaderBar.js';
import * as Home from './HomeComponent.js';


function App(props) {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <main>
                <Home.HomePage/>
            </main>

            <footer>
                Created by Sarah Haworth, Yaqi Lu, and Halle Hwang.
                &copy; 2024
            </footer>
        </div>

    )
}

export default App
