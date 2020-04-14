import React, { useState, useEffect } from 'react';
import { withAuth } from '../lib/authContext';
import { beerService } from '../lib/beerService';
import { Link, Redirect } from 'react-router-dom';
import Heart from '../components/Heart';
import './Beer.css';

const Beer = (props) => {
  const {id} = props.match.params;
  // const {id} = this.$route.params.id;

  const goBack = () => {
    props.history.goBack();
  }
  const [beerData, setBeerData] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const icon = beerData.labels && beerData.labels.icon;
  // const style = beerData.style && beerData.style.category.name;

  useEffect(() => {
    let ignore = false;

    const getBeer = () => beerService.getBeer(id)
    .then(data => {
      if (!ignore) {
        setBeerData(data);
        setIsLoading(false);  
      }
    })
    .catch(error => {
      console.error(error.response);
      if (error.response.status === 404 || error.response.status === 500) {
        setRedirect(true);
        setIsLoading(false);
      }
    });
    getBeer();

    return () => {ignore = true}
  }, [id]);

  return (
    isLoading ? <div className="section"><h1>Loading...</h1></div> : 
    redirect ? <Redirect to='/notfound'/> :
    // redirect ? props.history.replace('/notfound') :
      <div className="section">
        <div className="beer-container">
          <div className="back-heart">
            <Link to='/favorites' className="go-back" onClick={goBack}><span role="img" aria-label="left-angle-bracket">〈</span></Link>
            {/* <Heart item={beerData} icon={icon} style={style} isFavorite={isFavorite} /> */}
            <Heart beerData={beerData} />
          </div>
          {beerData.labels && <div className="label-img">
            <div>
              <img className="big-label-img" src={beerData.labels.large} alt="No pic" />
              </div>
            </div>}
          <h1>{beerData.name}</h1>
          {beerData.style && <h5>{beerData.style.name}</h5>}
          {beerData.style && <h6>{beerData.style.category.name}</h6>}
          {beerData.style && <p>{beerData.style.year}</p>}
          {beerData.style && <p>{beerData.style.description}</p>}
          <div className="beer-info">
            <div><strong>Abv: </strong>{beerData.abv}%</div>
            <div><strong>Ibu: </strong>{beerData.style && beerData.style.ibuMax}</div>
            <div><strong>Organic Beer:</strong> {beerData.isOrganic}</div>
          </div>
        </div>
      </div>
  )
}

export default withAuth(Beer);