import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { beerService } from '../lib/beerService';
import { Link, Redirect } from 'react-router-dom';
import Heart from '../components/Heart';
import './Beer.css';

class Beer extends Component {

  state = {
      data: [],
      favorites: [],
      item: this.props.item,
      isFavorite: false,
      redirect: false,
      isLoading: true
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    const id = this.props.match.params.id;
    beerService.getBeer(id)
    .then((data) => {
      this.setState({
        data: data,
        isLoading: false
      })
    })
    .catch((error) => {
      if (error.response.data.code === "not-found" || error.response.data.code === "unexpected" ) {
        this.setState({
          redirect: true,
          isLoading: false
        })
      }
    })

    beerService.getFavorites()
    .then((result) => {
        let isFavorite = this.state;
        result.find((favorite) => {
          if (id === favorite.id) {
            return isFavorite = true;
          } else {
            return isFavorite = false;
          }
        })
        this.setState({
          isFavorite: isFavorite
        })

      this.setState({
        favorites: result,
      })
    })
    .catch((error) => {
      console.error('Error');
    })
  }

  // handleFavorite = (item) => {
  //   const favorite = this.state.favorites.find(favorite => {
  //     return favorite.id === item.id;
  //   });

  //   if (favorite) {
  //     item.favorite = true
  //     }

  //   this.setState({
  //     favorite: favorite
  //   })
      
  //   }

  // saveToFavorites = () => {
  //   const { isFavorite } = this.state;
  //   const favorite = this.state;
    
  //   beerService.postFavorite({
  //     id: favorite.data.id,
  //     name: favorite.data.name,
  //     isOrganic: favorite.data.isOrganic,
  //     icon: favorite.data.labels && favorite.data.labels.icon,
  //     style: favorite.data.style && favorite.data.style.category.name
  //   })
  //   .then(() => {
  //     this.setState({ isFavorite: !isFavorite })
  //   })
  //   .catch((error) => {
  //     console.error('Error');
  //   })
  // }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    let { data, isFavorite, redirect, isLoading } = this.state;
    const icon = data.labels && data.labels.icon;
    const style = data.style && data.style.category.name;
    return (
      isLoading ? <div className="section"><h1>Loading...</h1></div> : 
      redirect ? <Redirect to='/notfound'/> :
        <div className="section">
          <div className="beer-container">
            <div className="back-heart">
              <Link to='/favorites' className="go-back" onClick={this.goBack}><span role="img" aria-label="left-angle-bracket">〈</span></Link>
              <Heart item={data} icon={icon} style={style} isFavorite={isFavorite} />
            </div>
            {data.labels && <div className="label-img"><div><img className="big-label-img" src={data.labels.large} alt="No pic" /></div></div>}
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