//REPLACE LOGO
import logo from '../../logo.svg';

//Import React Libray
import React from 'react';

//Import Style
import './App.css';

//Import Components
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>gourmand</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

