import React, { Component } from 'react';


const AllCoinsListItem = ({coin}) => {
    
    let usdData = coin['quotes']['USD'];

    return (
      <li className="all-coins-list__item">
        <div className="all-coins-list__feature _index">{coin['rank']}</div>
        <div className="all-coins-list__feature">{coin['name']}</div>
        <div className="all-coins-list__feature">{usdData['price']}<span className="dollar">$</span></div>
        <div className="all-coins-list__feature">{usdData['percent_change_24h']}<span className="percent">%</span></div>
        <div className="all-coins-list__feature _volume">{usdData['volume_24h']}<span className="dollar">$</span></div>
        <div className="all-coins-list__feature _available-supply">{coin['circulating_supply']}</div>
      </li>
    );
    
}

export default AllCoinsListItem;