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
    console.log(data)
    // let ibu = (data.style.ibuMax + data.style.ibuMin)/2;
    return (
      <div className="index-div section">
        <div className="beer-container beer-text">
          <div className="back-heart">
            <Link to='/beers' className="menu-button">&lt;</Link>
            <div className="toggle-favorite heart" onClick={this.saveToFavorites}>&hearts;</div>
          </div>
          {data.labels && <div className="label-img"><div><img src={data.labels.large} alt="No pic" /></div></div>}
          <h1>{data.name}</h1>
          {data.style && <h5>{data.style.name}</h5>}
          {data.style && <h6>{data.style.category.name}</h6>}
          {data.style && <p>{data.style.year}</p>}
          {data.style && <p>{data.style.description}</p>}
          <div className="beer-info">
            <div><strong>Abv: </strong>{data.abv}%</div>
            <div><strong>Ibu: </strong>{data.style && data.style.ibuMax}</div>
            <div><strong>Organic Beer:</strong> {data.isOrganic}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(Beer);