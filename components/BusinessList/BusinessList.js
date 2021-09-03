//Import React Library
import React from 'react';

//Import CSS
import './BusinessList.css';

//Import Components
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className='BusinessList'>
                <div className="BusinessList">
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                </div>
            </div>
        );
    }
}

export default BusinessList;
