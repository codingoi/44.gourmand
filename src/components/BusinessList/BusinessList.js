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
                    {this.props.business.map((business) => {
                        return <Business business={business}/>
                    })}
                </div>
            </div>
        );
    }
}

export default BusinessList;
