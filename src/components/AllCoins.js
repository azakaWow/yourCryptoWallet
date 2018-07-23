import React, { Component } from 'react';
import axios from 'axios';
import AllCoinsSearch from './AllCoinsSearch';
import AllCoinsHeader from './AllCoinsHeader';
import AllCoinsList from './AllCoinsList';
import AllCoinsPagination from './AllCoinsPagination';
import sortCoins from '../utils/sortCoins';

class AllCoins extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      sortField: 'rank',
      sortOrder: true,
      start: 1, 
      showPerPage: 50,
      shouldRenderPagination: false,
      shouldRenderNext:true
    };
    
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSortingCriteriaChange = this.handleSortingCriteriaChange.bind(this);
    this.handlePaginationChange = this.handlePaginationChange.bind(this);
  }

  componentDidMount() {
    this.getCoins();
  }
  
  handleSearchTextChange(searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    });
  }

  handleSortingCriteriaChange(data) {
    data.coins = sortCoins(data.sortField, data.sortOrder, this.state.coins);
    this.setState(data);
  }

  handlePaginationChange(direction) {
    let newRange;
    if(direction) {
      newRange = this.state.start + this.state.showPerPage;
    }else {
      newRange = this.state.start <= 1 ? 1 : this.state.start - this.state.showPerPage;
    }
      this.getCoins(newRange);
      this.setState({start: newRange});
    };
  

  getCoins(range) {
    let url;
    if(arguments.length > 0) {
      url = 'https://api.coinmarketcap.com/v2/ticker/?start='+range+'&limit='+this.state.showPerPage+'&structure=array';
    } else {
      url = 'https://api.coinmarketcap.com/v2/ticker/?start=1&limit='+this.state.showPerPage+'&structure=array';
    }
    axios.get(url)
      .then(res => {  
        if(res.status == 200) {
        
        let newState = {};
        newState.coins  = sortCoins(this.state.sortField, this.state.sortOrder, res.data.data);    
        
        if(newState.coins.length < this.state.showPerPage) {
          newState.shouldRenderNext = false;
        }

        this.setState(newState);  
      } 
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="all-coins">
              <AllCoinsSearch onSearchTextChange={this.handleSearchTextChange}/>
              <AllCoinsHeader onSortingCriteriaChange={this.handleSortingCriteriaChange}/>
              <AllCoinsPagination shouldRenderNext={this.state.shouldRenderNext} shouldRenderPagination={this.state.shouldRenderPagination} paginationPosition={this.state.start}  onPaginationChange={this.handlePaginationChange} />
              <AllCoinsList  coins={this.state.coins} searchText={this.state.searchText}/>
              <AllCoinsPagination shouldRenderNext={this.state.shouldRenderNext} shouldRenderPagination={this.state.shouldRenderPagination} paginationPosition={this.state.start}  onPaginationChange={this.handlePaginationChange} />
      </div>
    );
  }
}

export default AllCoins;