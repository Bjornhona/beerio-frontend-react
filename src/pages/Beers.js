import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import BeerPeek from '../components/BeerPeek';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import { beerService } from '../lib/beerService';

class Beers extends Component {

  state = {
    data: [],
    favorites: []
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    beerService.getBeers()
    .then((data) => {
      this.setState({
        data: data
      })
    })
    .catch((error) => {
      console.log(error);
    })

    beerService.getFavorites()
    .then((result) => {
      this.setState({
        favorites: result
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { data, favorites } = this.state;
    return (
      <div className="index-div section">
        <SearchBar />
        <div className="beers-title">
          <Link to='/home' className="menu-button">&lt;</Link>
          <h4>Explore the world's best beers</h4>
        </div>
        {data.map((item) => {
          return (
            <div className="beer-container" key={item.id}>
              <BeerPeek item={item} favorites={favorites} />
            </div>
          )
        })}

         {/* {this.state.data.map((item) => {
          if (item.labels.icon) {
            return (
            <div key={item.login}>
              <img src={item.avatar_url} alt="My Avatar" width="100px" border="2px solid black" />
              <p><strong>Name: </strong>{item.name}</p>
              <p><strong>Username: </strong>{item.login}</p>
              <p><strong>Bio: </strong>{item.bio}</p>
              <p><strong>Company: </strong>{item.company}</p>
              <p><strong>Repositories: </strong>{item.public_repos}</p>
              <p><strong>Blog: </strong>{item.blog}</p>
            </div> )
          } else {
            return (
              <div key={item.login}>
                <img src={item.avatar_url} alt="My Avatar" width="100px" border="2px solid black" />
                <p><strong>Username: </strong>{item.login}</p>
              </div>
            )
          }
        })} */}


      </div>
    )
  }
}

export default withAuth(Beers);