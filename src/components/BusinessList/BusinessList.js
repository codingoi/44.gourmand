//Import React Library
import React from 'react';

//Import CSS
import './BusinessList.css';

//Import Components
import Business from '../Business/Business';

class BusinessList extends React.Component {

    render() {
        return (
            <div className="BusinessList">
                {
                    typeof this.props.business !== 'string' ?
                        <>{this.props.term ?
                            <h2>Results for {this.props.term.toUpperCase()}</h2>
                            : <></>
                        }</>
                        : <div><h3>{this.props.business}</h3><p>Each search must have: <strong>Where ? (location)</strong></p></div>
                }
                
                    {
                        typeof this.props.business !== 'string' ? <div style={{margin: '0 0 0 9.375%'}}>{this.props.business.map((business) => {
                            return <Business business={business} key={business.id} />
                        })}</div> : <></>
                    }

               
            </div>
        );
    }
}

export default BusinessList;
