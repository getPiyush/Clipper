import React, { Component } from 'react';
import Headline from './Headline.js';

class Column extends Component {
  render() {
    return (

    <div className="col">
      <Headline text={this.props.text} hNumber={this.props.hNumber}/>
    </div>
  );

     }
 }

export default Column;
