import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      {props.buttonText && (
        <button className="card-button">{props.buttonText}</button>
      )}
    </div>
  );
}

export default Card;