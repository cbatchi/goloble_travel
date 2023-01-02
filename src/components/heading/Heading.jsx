import React from 'react'
import HeadingStyled from './heading.styled';

const Heading = ({title, desc, btnText}) => {
  return (
    <HeadingStyled>
      <div className="heading__box">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className="heading__box">
        <span>{btnText}</span>
      </div>
    </HeadingStyled>
  );
}

export default Heading