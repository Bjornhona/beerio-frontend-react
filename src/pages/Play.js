import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';

class Play extends Component {

  state = {
    mood: '',
    happiness: ''
  }

  handleFormSubmit = () => {
    this.props.history.push('/recommended');
  }

  render() {
    const { mood, happiness} = this.state;
    return (
      <div className="index-div section">
        <div className="beers-title">
          <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
          <h4>What beer mood are you in, {this.props.user.username}?</h4>
        </div>
        <form onSubmit={this.handleFormSubmit} className="signup">
          <h2>What mood are you in?</h2>
          <div className="first-row">
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_1.png" alt="happy" /></div>
              <input type="radio" name="mood" value={mood} /*onChange={this.handleChange*//>
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
          <h2>What beer type are you?</h2>
          
          <div className="first-row">
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_1.png" alt="happy" /></div>
              <input type="radio" name="glass" value={mood} /*onChange={this.handleChange*//>
              <label>Horrible</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_2.png" alt="happy" /></div>
              <input type="radio" name="glass" value={mood} />
              <label>Bad</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_3.png" alt="happy" /></div>
              <input type="radio" name="glass" value={mood} />
              <label>Sad</label>
            </div>
          </div>
          <div className="first-row">
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_4.png" alt="happy" /></div>
              <input type="radio" name="glass" value={mood} />
              <label>Okay</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_5.png" alt="happy" /></div>
              <input type="radio" name="glass" value={mood} />
              <label>Great</label>
            </div>
            <div className="mood-row">
              <div><img className="mood-image" src="/images/mood_6.png" alt="happy" /></div>
              <input type="radio" name="glass" value={mood} />
              <label>Happy</label>
            </div>
          </div>

          <input type="submit" value="Get the result" className="beer-container beer-button beer-top" />
          <p>Scared to see the result? 
            <Link to={"/home"}> Go back</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default withAuth(Play);