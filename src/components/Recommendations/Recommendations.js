//Import React Library
import React from 'react';


//Import Style
import './Recommendations.css';

class Recommendations extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

     componentDidMount() {
        this.handleSearch()
    }

    async handleSearch() {
        await this.props.findTopRated('restaurant', this.props.location, 'rating');
    }

    render() {
        return (
            <div className="Recommended">
                <h2>Popular Restaurants</h2>
            </div>
        )
    }
}

export default Recommendations;
