//Import React Library
import React from 'react';

//Import CSS
import './Business.css';


//Business Component
class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.image_url} alt={this.props.business.name} />
                </div>

                <div className="overlay overlay-left">
                <div className="Business-reviews">
                            
                            <h3 className="rating">{this.props.business.rating}
                                <sub className="material-icons">
                                    star
                                </sub>
                            </h3>
                        </div>
                    <div className="Business-information">
                        <div className="Business-address">
                            {this.props.business.location.display_address.map((detail, i) => {
                                return <p key={i}>{detail}</p>
                            })}

                            <p>{this.props.business.zipCode}</p>
                            <p>{this.props.business.display_phone}</p>
                        </div>

                        
                    </div>
                    
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-categories">
                    {this.props.business.categories[0].title}
                    <sup>.</sup>
                    <span>
                    {this.props.business.rating}
                    <sub className="material-icons">
                                    star
                                </sub>
                    </span>
                </div>
            </div>
        );
    }
}

export default Business;
