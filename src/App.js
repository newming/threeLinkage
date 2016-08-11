import React from 'react';

import {big,middle,small} from './city.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      middle:0,
      small:0
    }
  }
  handleSelect(e){
    this.setState({
      middle:e.target.value,
    })
  }
  handleSelectMiddle(e){
    this.setState({
      small:e.target.value,
    })
  }
  render () {
    // big
    let bigCity = big.map(function (item,i) {
      return (
         <option value={i} key={i}>{item}</option>
      )
    });
    // middle
    let num = this.state.middle;
    let middleItem = middle[num];
    let middleCity = middleItem.map(function (item,i) {
      return(
        <option value={i} key={i}>{item}</option>
      )
    });
    // small
    let smallNum = this.state.small;
    let smallItem = small[num][smallNum];
    let smallCity = smallItem.map(function (item,i) {
      return(
        <option value={i} key={i}>{item}</option>
      )
    })
    return(
      <div>
        <select onChange={this.handleSelect.bind(this)} defaultValue={0}>
          {bigCity}
        </select>&nbsp;
        <select onChange={this.handleSelectMiddle.bind(this)} defaultValue={0}>
          {middleCity}
        </select>&nbsp;
        <select defaultValue={0}>
          {smallCity}
        </select>
      </div>
    )
  }
}

export default App;
