import React from 'react'
import Heading from "../heading/Heading";
import ReviewStyled from './review.styled';

const Review = () => {
  return (
    <ReviewStyled>
      <Heading
        title="Reviews"
        desc="What people says about Golobe facilities"
        btnText="See All"
      />
    </ReviewStyled>
  );
}

export default Review