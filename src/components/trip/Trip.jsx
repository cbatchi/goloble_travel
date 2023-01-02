import React from "react";
import Heading from "../heading/Heading";
import TripStyled from "./trip.styled";
import { tripDests } from "../../data";
import Icon from "../icon/Icon";


const Trip = () => {
  return (
    <TripStyled>
      <Heading
        title="Plan your perfect trip"
        desc="Search Flights & Places Hire to our most popular destinations"
        btnText="See more places"
      />

      <div className="trip">
        <div className="trip__content">
          {tripDests.map((field, index) => (
            <div className="item" key={index}>
              <img src={field.picture} alt="" />
              <div className="item-text">
                <h3>{field.title}</h3>
                <p>flight - hotels - resorts</p>
              </div>
            </div>
          ))}
        </div>
        <div className="trip__destination">
          <div className="item">
            <ul className="item__content">
              <li>flights</li>
              <li>
                Search Flights & Places Hire to our most popular destinations
              </li>
              <li>
                <Icon name="paper-plane-sharp" />
                show flights
              </li>
            </ul>
          </div>
          <div className="item">
            <ul className="item__content">
              <li>hotels</li>
              <li>
                Search hotels & Places Hire to our most popular destinations
              </li>
              <li>
                <Icon name="paper-plane-sharp" />
                show hotels
              </li>
            </ul>
          </div>
        </div>
      </div>
    </TripStyled>
  );
};

export default Trip;
