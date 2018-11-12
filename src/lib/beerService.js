import axios from 'axios';

class BeerService {
  constructor() {
    this.beer = axios.create({
      //baseURL: 'https://api.brewerydb.com/v2/beers?key=1ff4f5a771c204dd18912e145d2e13ac',
      baseURL: 'http://localhost:5000',
      withCredentials: true
    })
  }

  getBeers() {
    return this.beer.get('/beers')
    .then(({data}) => data)
  }

  getBeer(id) {
    return this.beer.get(`/beers/${id}`)
    .then(({data}) => data)
  }

  getFavorites() {
    return this.beer.get('/beers/favorites')
    .then(({data}) => data)
  }

  postFavorite(data) {
    return this.beer.put('/beers', data)
    .then(({data}) => data)
  }
   
}

export const beerService = new BeerService()
