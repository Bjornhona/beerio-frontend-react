import React, { useState } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
// import { beerService } from '../lib/beerService';
import BeersContainer from '../components/BeersContainer';
import './Beers.css';

const Beers = (props) => {
  const { data, favorites } = props.location.myProps;
  console.log(data);
  console.log(favorites);

  // const [beerData, setBeerData] = useState(data);
  const [inputValue, setInputValue] = useState('');
  // const [myFavorites, setMyFavorites] = useState(favorites);
  // const [isLoading, setIsLoading] = useState(true);

  const handleFavorite = (item) => {
    const favorite = favorites.find(favorite => {
      return favorite.id === item.id;
    });

    if (favorite) {
      item.favorite = true
    }
  }
    
  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
  }
       
  const newData = data.filter((item) => {
    let dataName = item.name.toUpperCase();
    return dataName.includes(inputValue.toUpperCase())
  });

  console.log(newData);

  return (
    // isLoading ? <div className="section"><h1>Loading...</h1></div> : 
    <div className="beers-div section">
      <div className="searchbar"><input type="text" name="name" value={inputValue} onChange={handleSearchInput} placeholder="Search" /></div>
      <div className="beers-title">
        <Link to='/home' className="back-sign"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
        <h4>Explore the worlds best beers</h4>
        <span></span>
      </div>
      {newData.map((item) => {
        handleFavorite(item);
        const style = item.style && item.style.category.name;
        return (
          <BeersContainer
            key={item.id}
            id={item.id}
            isFavorite={item.favorite}
            item={item}
            icon={item.labels.icon}
            style={style}
            // update={update}
            data={newData}
            favorites={favorites}
          />
        )
      })}
    </div>
  )
}

export default withAuth(Beers);