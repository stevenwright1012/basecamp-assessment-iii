import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
    render(){
        return <div>
            <Foxy />
            <Vulpix />
            <Test />
        </div>
    };
}

class Foxy extends React.Component{
    foxSays(){
         alert("Awah pah pah pah pah pah pow");
    };
    render(){
        return <button onClick = {this.foxSays}>What does the fox say?</button>
    }
}

class Vulpix extends React.Component{
    render(){
        return <a href="Vulpix.html">Wanna See a fox? Click here</a>
    };
}
const rando = Math.floor(Math.random() * Math.floor(2));
const starArr= [
    {phrase: "Star Fox is a good game!",
    imgSrc: "SNES-Star-Fox.png"
},
{phrase: "Star Fox is a bad game!",
imgSrc: "GC-Star-Fox.png"
}
];
class Test extends React.Component{
    render(){
        let starfox = starArr[rando];
        return <div>
        <h1>{starfox.phrase}</h1>
        <img src={starfox.imgSrc} alt="Star Fox"/>
        </div>
    };
}

export default App;