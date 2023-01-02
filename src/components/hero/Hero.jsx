import React, { useState } from "react";
import { searchInputs, searchSubmit, searchTypes } from "../../data";
import useForm from "../../tool/useForm";
import Icon from "../icon/Icon";
import HeroStyled from "./hero.styled";

const Hero = () => {
  const { data, handleChange, handleSubmit } = useForm({}, (data) => {
    // Put data here
  });

  return (
    <HeroStyled>
      <div className="text">
        <span className="text__item">Helping Others</span>
        <span className="text__item">Live & Travel</span>
        <span className="text__item">Special offers to suit your plan</span>
      </div>

      <div className="searchbar">
        <div className="searchbar__top">
          {searchTypes.map((type, index) => (
            <a href="/" key={index}>
              <Icon name={type.icon}></Icon>
              {type.name}
            </a>
          ))}
          <span className="line"></span>
        </div>

        <div className="searchbar__field" onSubmit={handleSubmit}>
          {searchInputs.map((field, index) => (
            <div className="searchbar__field-input" key={index}>
              {(field.type || field.value) && (
                <input
                  type={field.type}
                  value={field.value || "1 Passenger, Economy"}
                />
              )}
              {field.icon && <Icon name={field.icon} />}
              {field.label && <label htmlFor="">{field.label}</label>}
            </div>
          ))}
          <div className="searchbar__field-submit">
            {searchSubmit.map((field, index) => (
              <span key={index}>
                <Icon name={field.icon} />
                {field.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </HeroStyled>
  );
};

export default Hero;
