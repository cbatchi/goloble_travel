import {tripDestinationFive, tripDestinationFour, tripDestinationHeight, tripDestinationNine, tripDestinationOne, tripDestinationSeven, tripDestinationSix, tripDestinationThree, tripDestinationTwo} from '../assets'

export const searchTypes = [
  {
    name: "flight",
    icon: "airplane-sharp",
  },
  {
    name: "stays",
    icon: "bed-sharp",
  },
];

export const searchInputs = [
  {
    type: "text",
    label: "from - to",
    icon: "swap-horizontal-sharp",
    value: "Paris - France"
  },
  {
    type: "text",
    label: "trip",
    icon: "chevron-down-sharp",
    value: "Sidney - Australie"
  },
  {
    type: "date",
    label: "depart - return",
  },
  {
    type: "text",
    label: "passenger - class",
  },
];

export const searchSubmit = [
  {
    text: "add promo code",
    icon: "add-sharp",
  },
  {
    text: "show flights",
    icon: "paper-plane-sharp",
  },
];


export const tripDests = [
  {
    title: "Istanbul, Turkey",
    picture: tripDestinationOne,
  },
  {
    title: "Sidney, Australia",
    picture: tripDestinationTwo,
  },
  {
    title: "Baku, Azerbaijan",
    picture: tripDestinationThree,
  },
  {
    title: "Malé, Maldives",
    picture: tripDestinationFour,
  },
  {
    title: "Paris, France",
    picture: tripDestinationFive,
  },
  {
    title: "New York, US",
    picture: tripDestinationSix,
  },
  {
    title: "London, UK",
    picture: tripDestinationSeven,
  },
  {
    title: "Tokyo, Japan",
    picture: tripDestinationHeight,
  },
  {
    title: "Dubai, UAE",
    picture: tripDestinationNine,
  },
];