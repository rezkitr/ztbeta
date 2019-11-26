import React from 'react';

function Title(props) {
  return (
    <div className="title">
      <h3 >{props.title}</h3>
      <p className="text-right" >{props.subtitle}</p>
    </div>
  )
}

export default Title;
