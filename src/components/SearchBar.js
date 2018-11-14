import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import auth from '../lib/auth-service';
// import { beerService } from '../lib/beerService';

class SearchBar extends Component {

  state = {
    search: ''
  }

  // saveToFavorites = () => {
  //   const { item } = this.props;
  //   auth.postFavorite({
  //     id: item.id,
  //     name: item.name,
  //     isOrganic: item.isOrganic,
  //     icon: item.labels.icon
  //   })
  //   .then()
  //   .catch()
  // }

  render () {
    const {search} = this.state;
    // item.isOrganic = 'Y' ? "Yes" : "No";
    return (
      <div className="beer-peek">
        <form onSubmit={this.handleFormSubmit} className="signup">
          <input type="text" name="username" value={search} onChange={this.handleChange}/>
          <input type="submit" value="Search" className="beer-container beer-button beer-top" />
        </form>
        {/* <div>{item.labels && <img src={item.labels.icon} alt="No pic" />}</div>
        <div>
          <h5>{item.name}</h5>
          {item.style && <p>{item.style.category.name}</p>}
        </div>
        <p><strong>Organic: </strong>{item.isOrganic}</p>
        <div>
          <div className="toggle-favorite heart" onClick={this.saveToFavorites}>&hearts;</div>
          <Link to={`/beers/${item.id}`} className="menu-button">&gt;</Link>
        </div> */}
      </div>
    )
  }
}
  
  export default SearchBar;