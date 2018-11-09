import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import BeerPeek from '../components/BeerPeek';
import { Link } from 'react-router-dom';
import { beerService } from '../lib/beerService';

class Beers extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    beerService.getBeers()
    .then((data) => {
      console.log("data", data);
      this.setState({
        data: data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Link to='/home' className="menu-button">&lt;</Link>
        <h1>Beers Page</h1>
        <h3>Welcome {this.props.user.username}</h3>
        {data.map((item) => {
          return (
              <BeerPeek key={item.id} item={item} />
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