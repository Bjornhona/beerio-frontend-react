import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { beerService } from '../lib/beerService';
import { Link } from 'react-router-dom';

class Beer extends Component {

  state = {
      data: []
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    const id = this.props.match.params.id
    beerService.getBeer(id)
    .then((data) => {
      //console.log("data", data);
      this.setState({
        data: data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    let { data } = this.state;
    return (
      <div>
        <Link to='/beers' className="menu-button">&lt;</Link>
        <h1>Beer Page</h1>
        {/*<img src={data.labels.icon} alt="No pic" />*/}
        <h3>{data.name}</h3>
        <p>Info</p>
        <p>Organic Beer: {data.isOrganic}</p>
        <img src="#" alt="Add to favorites" className="toggle-favorite" />
      </div>
    )
  }
}

export default withAuth(Beer);