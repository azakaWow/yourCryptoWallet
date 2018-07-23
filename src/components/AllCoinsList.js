import React, { Component } from 'react';
import AllCoinsListItem from './AllCoinsListItem';


const AllCoinsList = ({coins, searchText}) => {

  let coinList = [];


  if(coins){
    coins.forEach((coin) => {      
      if (coin.website_slug.indexOf(searchText) !== -1 ||  coin.symbol.toLowerCase().indexOf(searchText) !== -1) {
        coinList.push(<AllCoinsListItem key={coin.name} coin={coin}/>);
      }
    });
  }

    return (
      <div className="all-coins">
            <ul className="all-coins-list">
              {coinList}  
            </ul>  
      </div>
    );

}

export default AllCoinsList;