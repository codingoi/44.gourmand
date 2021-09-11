//Import React Library
import React from 'react';

//Import CSS
import './Gallery.css'

//Import Components
import Business from '../Business/Business';

class Gallery extends React.Component {

    render() {
        return (
            <div className="Gallery">
                    {this.props.business.map((business) => {
                        return <Business business={business} key={business.id}/>
                    })}
                </div>
        );
    }
}

export default Gallery;
