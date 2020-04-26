import React, { useState } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';

const Play = (props) => {
  const [mood, setMood] = useState('');
  const [type, setType] = useState('');

  const handleFormSubmit = () => {
    //TODO: what hapens on submit?
  };

  return (
    <div className="index-div section">
      <div className="beers-title">
        <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
        <h4>What beer mood are you in, {props.user.username}?</h4>
      </div>
      <form onSubmit={handleFormSubmit} className="signup">
        <div className="mood-page">
          <h2>What mood are you in?</h2>
          <div className="first-row">
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_1.png" alt="happy" /></div>
              <input type="radio" name="mood" value={mood} required />
              <label>Horrible</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_2.png" alt="happy" /></div>
              <input type="radio" name="mood" value={mood} />
              <label>Bad</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_3.png" alt="happy" /></div>
              <input type="radio" name="mood" value={mood} />
              <label>Sad</label>
            </div>
          </div>
          <div className="first-row">
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_4.png" alt="happy" /></div>
              <input type="radio" name="mood" value={mood} />
              <label>Okay</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_5.png" alt="happy" /></div>
              <input type="radio" name="mood" value={mood} />
              <label>Great</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_6.png" alt="happy" /></div>
              <input type="radio" name="mood" value={mood} />
              <label>Happy</label>
            </div>
          </div>
        </div>

        <div className="mood-page">
          <h2>What beer type are you?</h2>
          <div className="first-row">
            <div className="mood-row">
              <div><img className="mood-image" src="/images/gourmand.png" alt="gourmand" /></div>
              <input type="radio" name="glass" value={type} required />
              <label>Gourmand</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/chique.png" alt="chique" /></div>
              <input type="radio" name="glass" value={type} />
              <label>Chique</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/funny.png" alt="funny" /></div>
              <input type="radio" name="glass" value={type} />
              <label>Funny</label>
            </div>
          </div>
          <div className="first-row">
            <div className="mood-row">
              <div><img className="mood-image" src="/images/casual.png" alt="casual" /></div>
              <input type="radio" name="glass" value={type} />
              <label>Casual</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/friendly.png" alt="friendly" /></div>
              <input type="radio" name="glass" value={type} />
              <label>Friendly</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/king.png" alt="king" /></div>
              <input type="radio" name="glass" value={type} />
              <label>King</label>
            </div>
          </div>
        </div>

        <Link to={"/recommended"} className="beer-container beer-button beer-top" >Get the result</Link>
        <p>Scared to see the result? 
          <Link to={"/home"}> Go back</Link>
        </p>
      </form>
    </div>
  );
}

export default withAuth(Play);