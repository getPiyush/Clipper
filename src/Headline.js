import React, { Component } from 'react';

class Headline extends Component {
  render() {
     //<h{props.hNumber} className="headline">{props.text}</h{props.hNumber}>
     //<h2 className="headline">{this.props.text} {this.props.hNumber}</h2>
    //var str='<h'+this.props.hNumber+' className="headline">'+this.props.text+'</h>';
    var comp = this.getHeadline(this.props.hNumber,this.props.text);
    return (

      <div>{comp}</div>

    );


     }

     getHeadline(count,text){
       switch(parseInt(count)) {
        case 1: return(
          <h1 className="headline">{text}{count}</h1>
        );
        case 2: return(
          <h2 className="headline">{text}{count}</h2>
        );
        case 3: return(
          <h3 className="headline">{text}{count}</h3>
        );
        case 4: return(
          <h4 className="headline">{text}{count}</h4>
        );
        case 5: return(
          <h5 className="headline">{text}{count}</h5>
        );
        case 6: return(
          <h6 className="headline">{text}{count}</h6>
        )

      }

     }
 }

 export default Headline;
