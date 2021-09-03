//REPLACE LOGO
import logo from '../../logo.svg';

//Import React Libray
import React from 'react';

//Import Style
import './App.css';

//Import Components
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';

//Business object will be a stand in for the data pulled from the yelp api at a later date

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businessArray = [business, business, business, business, business, business];

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>gourmand</h1>
        <SearchBar />
        <BusinessList business={businessArray} />
      </div>
    );
  }
}

