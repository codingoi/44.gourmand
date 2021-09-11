//API Keys (strings)

const apiKey = '[API KEY]';

const Yelp = {
    async search(term, location, sortBy) {

        //Temporary CORS Anywhere URL - CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.
        const cors = 'https://cors-anywhere.herokuapp.com/'

        //Yelp Endpoint
        let url;
    
        //Combined cors and Yelp endpoint
        if(typeof location === 'object'){
            const endpointLatLong = `https://api.yelp.com/v3/businesses/search?term=${term}&latitude=`+location.latitude+'&longitude='+location.longitude+`&sort_by=${sortBy}&limit=10&radius=8050`;
             url = cors + endpointLatLong;
        } else {
            const endpoint = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
            url = cors + endpoint;
        }
        

        //Fetch Browser API Call
        return fetch(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    const jsonResponse = response.json();
                    return jsonResponse // Retrieved list of businesses
                }
                return 'Your search request has failed. Please try again';
                //throw new Error('Request failed!');
          
            }, (networkError) => {
                return "Network Error: Search could not be completed";
            })
            .then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    console.log("busy", jsonResponse.businesses)
                    return jsonResponse.businesses.map((business) => {
                        const { id, image_url, name, location, display_phone, categories, rating, reviewCount, transactions } = business;
                        return {
                            id,
                            image_url,
                            name,
                            location,
                            display_phone,
                            categories,
                            rating,
                            reviewCount,
                            transactions
                        }
                    })
                }
                return 'No business found for this search';
                //throw new Error('No businesses found for this search.')
            })
    }
}


export default Yelp;
