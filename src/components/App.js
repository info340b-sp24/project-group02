import React from 'react';
import {Header} from './HeaderBar.js';
import {HomePage} from './HomeComponent.js';
import {MyActivity} from './MyActivityComponent.js';
import {ActivityDetails} from './ActivityDetailsComponent.js';


function App(props) {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <main>
                <HomePage/>
                {/* {<MyActivity/>} */}
                {/* {<ActivityDetails/>} */}
            </main>

            <footer>
                Created by Sarah Haworth, Yaqi Lu, and Halle Hwang.
                &copy; 2024
            </footer>
        </div>

    )
}

export default App
