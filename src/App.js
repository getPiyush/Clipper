import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Column from './Column.js';
import Row from './Row.js';

class App extends Component {
  render() {
    var rows = this.generateRandomHeadlines();
    console.log(rows);
    return (
          <div className="container">
            <nav className="nav fixed-top">
              <h4><span className="badge badge-dark">High.&gt;</span></h4>
            </nav>
            <div className="container">{rows}</div>
           </div>

    );
  }

  generateRandomHeadlines(){

    var rows = [];
    var demoStr = "Basic grid layouts to get you familiar with building within the Bootstrap grid system.";

    for(var n=0; n<30; n++)
    {
      var numcols = this.getRandomInt(1, 6);
      var cols = [];
        for (var i=0; i < numcols; i++) {
          cols.push(<Column hNumber ={numcols} text={demoStr}  />);
        }
      rows.push(<Row columns={cols}/>);

    }

    return rows;

  }




  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }



}

export default App;
