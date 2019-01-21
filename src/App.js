import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResult from './SearchResult';
import Search from './Search';

class App extends Component {
  
  state = {
      twlData: [],
      searchKey:""
};
// test 
componentDidMount() {
  const url = "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000";

  fetch(url)
      .then(dataResult => dataResult.json())
      .then(result => {
        this.state.twlData = result;
      });
}

toggleFavourite = title => {
      let result = this.state.twlData;
      let index = result.findIndex((item) =>{
        return item.title === title;
      }); 
      if (result[index].IsFavourite){
        result[index].IsFavourite = false;
      }
      else{
        result[index].IsFavourite = true;
      }
      this.setState({twlData: result});
  };

  handleSubmit = (search) => {
    let  result = search.searchKey;
    this.setState({searchKey: result});
}

  render() {
    const source = this.state.twlData;
    const searchKey = this.state.searchKey;
    const favourites = source.filter((item) => { return item.IsFavourite; });

    let lookupResult = [];
    if (searchKey.length > 0)
      lookupResult = source.filter((item)=>{
            return item.title.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1;
         });

    return (
      <div className="app">
        <div className="App-header">
          Toronto Waste Lookup
        </div>
        <div className="container">
        <Search  handleSearchSubmit={this.handleSubmit} />

        <SearchResult 
          searchResult = {lookupResult} 
          toggleFavourite = {this.toggleFavourite} 
        />
        
        <div className={`${favourites.length>0? "visible":"invisible" }`} ><h3 className="text-success">Favourites</h3></div>
        
        <SearchResult 
          searchResult = {favourites} 
          toggleFavourite = {this.toggleFavourite} 
        />
         </div>
      </div>
    );
  }
}

export default App;
