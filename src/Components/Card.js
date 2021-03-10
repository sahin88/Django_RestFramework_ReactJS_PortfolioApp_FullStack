import React from "react";
import PropTypes from "prop-types";
const Card=(props)=>{

    return(
        <div className="projectPageCard">
            <div className="cardImage">
                {console.log('photos',props.src)}
                <img src={props.src}/>
            </div>
        <div className="cardText">
          <h3> {props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className="cardStats">
          <a href="#">Read More !</a>
        </div>
      </div>
    )
}
Card.propTypes = {
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
 
};

export default Card;