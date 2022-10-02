import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               <ol key=" relativeList">
            <li key="relativeListItem1">Rajesh</li>
            <li key="relativeListItem2">Mahesh</li>
            <li key="relativeListItem3">Ravi</li>
            <li key="relativeListItem4">Rakesh</li>
            </ol>
            </div>
        )
    }
}


export default App;
