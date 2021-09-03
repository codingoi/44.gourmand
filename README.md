# Gourmand
## A Yelp-like clone

In total, there will be four parts to this project:

- Creating Static Components
- Passing Information to Components
- Setting the State of Ravenous Components
- Interacting with the Yelp API

### Functional Overview
- As a user, I should be able to search for restaurants
- As a user, I should be able to view a list of restaurants returned by the Yelp API
- As a user, I should be able to sort through restaurants using a filter

### Components
#### Business
The purpose of the <Business /> component is to represent how a business (a restaurant) in Gourmand will be formatted and styled. It will be updated dynamically using the Yelp API.

#### BusinessList
The point of the <BusinessList /> component is to simulate what a returned list of businesses would look like in Gourmand (after querying the Yelp API, for example). 

#### SearchBar
The search bar will communicate with the Yelp API.
