//Import React Library
import React from 'react';

//Import CSS
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',     //Refers to the search term input 
            location: '', //Refers to the location search
            sortBy: 'best_match'  //Refers to the seleted sorting option
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        //Object which holds search results
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    }

    //Returns the current CSS class for sorting options
    getSortByClass(sortByOption) {
        return (this.state.sortBy === sortByOption) ? 'active' : '';
    }

    //Sets State of A "sortBy"
    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }

    //Sets State of "term"
    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    //Sets State of "location"
    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    //Sends term/location/option back to App to be utilized in the API Call
    handleSearch(event) {
        const { term, location, sortBy } = this.state;
        this.props.searchYelp(term, location, sortBy);
        event.preventDefault(); // Prevents the <a> tag action from triggering causing a rerender
    }

    //Builds HTML-like JSX that will be rendered to represent the Available Sorting Options 
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li className={this.getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
            </li>);
        });
    }
    render() {
        return (
            <div className="SearchBar">
                <h2 className="SearchBar-heading">Explore</h2>
                <div className="SearchBar-container">
                    <div className="SearchBar-sort-options">
                        <ul>
                            {this.renderSortByOptions()}
                        </ul>
                    </div>
                    <h3 style={{ textAlign: 'center', display:'block' }}>Your Delicacy of Choice?</h3>
                    <div className="SearchBar-fields">
                        <input placeholder="Search" onChange={this.handleTermChange} required />
                        <input placeholder="Where?" onChange={this.handleLocationChange} required />
                    </div>
                    <div className="SearchBar-submit">
                        <a href="" onClick={this.handleSearch}>Let's Go</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;
