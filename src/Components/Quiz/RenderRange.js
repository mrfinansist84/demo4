import React, {useState} from 'react';

const RenderRange = (props) =>{

  const [ sliderValue, setSliderValue] = useState(1);

        return (
          <div className="range-Container">
              <center>
              <div className="render-range-value">
                      {sliderValue}
                    </div>
                </center>
              <div className="render-range-input">
              <input
                    type="range" 
                    id="myRange" 
                    min="1" 
                    value={sliderValue}
                    max="10" 
                    className="cRenderRangeSlider" 
                    onChange={(e)=>setSliderValue(e.target.value)}
                  />
            </div>
              <center>
                    <button
                  value={sliderValue}
                  onClick={props.onAnswerSelected}   
                  className="cRenderRangeButton"
                >
                        Next Question
                </button>
                </center>
            </div>
        );
    }

export default RenderRange;
