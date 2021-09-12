//Import React Libray
import React from 'react';

//Import Style
import './App.css';

//Import Components
import BusinessList from '../BusinessList/BusinessList.js';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar.js';
import Recommendations from '../Recommendations/Recommendations';
import Gallery from '../Gallery/Gallery'

//Import Yelp API Call function which will return a business object
import Yelp from '../../util/Yelp';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
      recommendations: [],
      location: {},
      term: '',
    }

    this.getLocation = this.getLocation.bind(this);
    this.searchYelp = this.searchYelp.bind(this);
    this.yelpRecommendations = this.yelpRecommendations.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }



  async getLocation() {
    if ('geolocation' in navigator) {
      const response = await navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ location: position.coords })
      })
    } else {
      this.setState({ location: { latitude: 40.7666688, longitude: -73.990144 } })
    }
  }

  yelpRecommendations(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
      .then((businesses) => {
        this.setState({ recommendations: businesses })
      })
  }



  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
      .then((businesses) => {
        this.setState({ businesses: businesses, term: `${term} in ${location}` || location })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          (this.state.location.longitude === undefined) ? <p></p> : <><Recommendations location={this.state.location} findTopRated={this.yelpRecommendations} />
            <Gallery business={this.state.recommendations} /></>
        }
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList business={this.state.businesses} term={this.state.term} />
      </div>
    );
  }
}

export default App;
