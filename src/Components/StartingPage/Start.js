import React from 'react';
import './Start.scss';
import { Trail } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';

const Start = () => {
    const words = ['health', 'finances', 'career', 'leisure', 'family'];

    return (
      <div className="startContainer">
          <nav className="headerContainer">
                    <Link to="/signup">
            <button className="start-btn">SIGN UP</button>
          </Link>

                <Link to="/signin">
            <button className="start-btn">SIGN IN</button>
          </Link>
                </nav>
          <div className="startContainer-main">
            <div className='titleContainer-flex'>
                <div className="titleContainer">
                    <Trail
                            items={words}
                            keys={words => words}
                                      from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                                      config={{ delay: 900, duration: 1500 }}
                          >
                            {words => props => (
                            <div className="titles" style={props}>
                                      {words}
                                    </div>
                        )}
                          </Trail>
          </div>
          </div>
          <div className="Start-text-box">
            <h2> Wheel & Scrum</h2>
            <span className='Start-description'>
                  Wheel&Scrum is a simple yet powerful tool for visualizing all areas in your life
                  at once to see where you most need improvement. Created with Scrum in mind it helps
                  you achieve your goals effortlessly.
            </span>
          </div>
                </div>
        </div>
    );
};

export default Start;
