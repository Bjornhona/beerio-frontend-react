import axios from 'axios';

class BeerService {
  constructor() {
    this.beer = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true
    })
  }

  getBeers() {
    return this.beer.get('/beers')
    .then(({data}) => data)
    .catch((error) => {
      console.log(error);
    })
  }

  getFavorites() {
    return this.beer.get('/beers/favorites')
    .then(({data}) => data)
    .catch((error) => {
      console.log(error);
    })
  }

  postFavorite(data) {
    return this.beer.put('/beers', data)
    .then(({data}) => data)
    .catch((error) => {
      console.log(error);
    })
  }

  getBeer(id) {
    return this.beer.get(`/beers/${id}`)
    .then(({data}) => data)
    .catch((error) => {
      console.log(error);
    })
  }
   
}

export const beerService = new BeerService()
