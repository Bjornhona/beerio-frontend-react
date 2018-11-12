# BEERIO
This project was created by Åsa Eriksson

## Description

Beerio is a web page for "The Happy Beer Gourmand". It will give the user information about any beer. It will let the users give ratings, save their favourites and receive recommendations for beers specifically adapted to their personality and mood.

## User stories

- 404: As an unknown/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault. It will have a link back to home.
- Signup: As an unknown I can sign up in the platform so that I can start saving favorite beers
- Login: As a user I can login to the platform so that I can see my favorite beers
- Logout: As a user I can logout from the platform so no one else can use my stored data
- List Beers: As a user I want to see the beers so that I can choose one to buy
- Search Beers: As a user I want to search beers by name so that I know if it´s already in the platform
- Add to favorites: As a user I want to add a beer to favorite so that I can save the beers that I liked the most
- See my favorites: As a user I want to see my favorite beers so that I can see the ones I liked the most



## Backlog
- Add Rating: As a user I want to rate the beers that I have tasted and add a comment about the taste
- See ratings: As a user I want to see the average rating of each beer by the community and the most recent opinions about it
- Write Comments: Leave and share comments with the community
- Add Beers: As a user I can add a beer so that I can share it with the community

__Todays Recommendation game:__
- As a user i would like to receive a recommendation according to the my personality, mood and area.
__Scan barcode:__
- As a user I want to scan a beer and receive information about it
__Geo Location:__
- As a user I want to find the neerest Brewerie in my area and see it on a map

# Client

## Routes

/ - Index
/auth/login - Login form
/auth/signup - Signup form
/home - explore(search), play, shop, favourites
/beers - beer list
/beer/:beerId - beer detail
/beers/favourites - beer list of my favourites
/play - personality, mood and area form
/404

## Pages

Index Page
Log in Page
Sign in Page
Home Page
Beers List Page
Beers Detail Page
Beers Favourites Page
Play Page
404 Page

## Components

Navbar component
Props:
State:

Beer Card component
Props:
State:

Search component
Props:
State:

Brewerie component
Props:
State:

Footer component
Props:
State:

# IO

## Services

__Auth Service:__
auth.login(user)
auth.signup(user)
auth.logout()
auth.me()
auth.getUser() // synchronous

__Beer Service:__
beer.list()
beer.create(data)
beer.detail(id)
beer.addFavorite(id)
beer.removeFavorite(id)
beer.addRating(id, data)
beer.addComment(id, data)
beer.getBeer()

Beer api -> url [https://www.brewerydb.com/developers](https://www.brewerydb.com/developers)

# Server

## Models

__User model:__
name - String
email - String // [ObjectID<User>] // required & unique
password - String // required
favorites - [:beerId, name, isOrganic, labels, brewery]
rating - [:beerId, totalRatings, myRating, averageRating, myComment]

__Beer model:__
:beerId - String // [ObjectID<Beer>]
name - String
description - String
year - String
food pairings - String
isOrganic - Boolean
abv - String
labels -String
brewery - String
servingTempreatureDisplay - String "Cool - (8-12C/25-56F)

## API Endpoints/Backend Routes

__/__
GET /

GET /auth/me

__/signup__
POST /auth/signup
  body (name, email, password)

__/login__
POST /auth/login
  body (email, password)

__/logout__
POST /auth/logout
  body: (empty)

__/beers__
api ext: GET /beers
api int: GET /beers/favorites
  body (:beerId)
api int: POST /beers/favorites
  body (:beerId, name, isOrganic, labels, brewery)

__/favorites__
api int: GET /beers/favorites
api int: POST /beers/favorites
  body (:beerId)
api int: POST /beers/:beerId
  body (:beerId)

__/beers/:beerId__
api ext: GET /beers/:beerId
  body (:beerId, name, description, year, food pairings, isOrganic, abv, labels, brewery, servingTempreatureDisplay)
api int: POST /beers/favorites
  body (:beerId, name, isOrganic, labels, brewery)


## Links

### Trello and Kanban
Trello url [https://trello.com/b/fBzgnuku/namnl%C3%B6s-tavla](https://trello.com/b/fBzgnuku/namnl%C3%B6s-tavla)
Picture of my physical Kanban board

### Git
The url to your repository and to your deployed project

Client repository Link Server repository Link

Deploy Link

### Slides
The url to your presentation slides

Slides Link