import React, { Component } from 'react';
import HeaderContent from './HeaderContent';
import AllCoins from './AllCoins';

class Home extends Component {

  render() {
    return (
    <div className="wrapper">
      <HeaderContent/>  
      <AllCoins/>
    </div>
    );
  }
}

export default Home;