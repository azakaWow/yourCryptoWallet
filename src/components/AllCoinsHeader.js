import React, { Component } from 'react';


class AllCoinsHeader extends Component {

  constructor(props) {
    super(props);
    this.changeSortingCriteria = this.changeSortingCriteria.bind(this);
  }
  
  componentDidMount() {  
    this.setState({
     activeElement: document.querySelector('.all-coins-list__feature._index')
   });   
  }

  changeSortingCriteria(e) {
    let sortingData,
        activeElement = this.state.activeElement;  

        
    if(e.target.getAttribute("data-type") == activeElement.getAttribute("data-type")) {   
      let newDataOrder =  !(activeElement.getAttribute("data-order") == "true");  
      activeElement.setAttribute("data-order", newDataOrder);
      sortingData = {
        sortField: activeElement.getAttribute("data-type"),
        sortOrder: newDataOrder
      }; 
    }
    else {
      activeElement.setAttribute("data-active","false");
      activeElement.setAttribute("data-order","true");

      let newTarget = e.target;
      newTarget.setAttribute("data-active","true");
      
      this.setState({activeElement: newTarget});
      sortingData = { sortField: newTarget.getAttribute("data-type"), sortOrder: true};  
    }
      this.props.onSortingCriteriaChange(sortingData);
  }


  render() {

    return (
        <li  onClick={this.changeSortingCriteria} className="all-coins-list__item _header">
            <div data-active="true" data-type="rank" data-order='true' className="all-coins-list__feature _header  _index">№</div>
            <div data-active="false" data-type="name" data-order='true' className="all-coins-list__feature _header _name">Name</div>
            <div data-active="false" data-type="price" data-order='true' className="all-coins-list__feature _header">Price</div>
            <div data-active="false" data-type="change" data-order='true' className="all-coins-list__feature _header">Change (24h)</div>
            <div data-active="false" data-type="volume" data-order='true' className="all-coins-list__feature _header _volume">Volume (24h)</div>
            <div data-active="false" data-type="circSupply" data-order='true' className="all-coins-list__feature _header _available-supply">Circulating supply</div>
        </li>
    );
  }
}

export default AllCoinsHeader;