import axios from 'axios';

class BeerIdService {
  constructor() {
    this.beer = axios.create({
      baseURL: 'http://localhost:5000',
      crossDomain: true,
    })
  }

  getBeers(id) {
    return this.beer.get(`/beers/${id}`)
    .then(({data}) => data)
  }
  
}

export const beerIdService = new BeerIdService()
