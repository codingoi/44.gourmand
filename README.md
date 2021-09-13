# Gourmand
## A Yelp-like clone

### Functional Overview
- As a user, I should be able to search for restaurants
- As a user, I should be able to view a list of restaurants returned by the Yelp API

### Product Breakdown
- Through the use of the Geolocation Web API, the app will request permission to access the the location of the user's device. The app will then make an initial Yelp API call to request the top 10 highest rated restaurants within 5 miles of the user's recorded latitude and longitude. If the user denies permission, the user will be presented with a generic list of the top 10 highest rated restaurants in New York City. 
- The user is then presented with the Explore search bar. The user can input a required location, and an optional search term.  The user also has the option to sort the response with 3 options: Best Match, Highest Rated, Most Reviews. The default option is Best Match
- 
![Initial Render View!](https://github.com/osita-igwe/44.gourmand/blob/main/README-assets/Screen%20Shot%202021-09-12%20at%2011.01.00%20PM.png "San Juan Mountains")
