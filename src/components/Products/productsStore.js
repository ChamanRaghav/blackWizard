import Images from "../../assets/Images";

const T_SHIRTS = "T Shirts";
const SHORTS = "Shorts";
const TRACK_PANTS = "Track Pants";
const TRACK_SUITS = "Track Suits";

export const products = [
  {
    id: 1,
    src: Images.LED_LIGHTS,
    title: T_SHIRTS,
    description: "9 watt to 20 watt",
    type: T_SHIRTS,
    images: [
      {
        src: Images.LED_LIGHTS,
      },
    ],
    detail: [
      {
        varient: "9 Watt",
        price: "60",
      },
      {
        varient: "12 Watt",
        price: "110",
      },
      {
        varient: "15 Watt",
        price: "160",
      },
      {
        varient: "20 Watt",
        price: "250",
      },
    ],
  },
  {
    id: 2,
    src: Images.CONSILD_LIGHTS,
    title: SHORTS,
    description: "",
    type: SHORTS,
    images: [
      {
        src: Images.CONSILD_LIGHTS,
      },
    ],
    detail: [
      {
        varient: "7 Watt",
        price: "110",
      },
      {
        varient: "10 Watt",
        price: "150",
      },
      {
        varient: "12 Watt",
        price: "190",
      },
      {
        varient: "14 Watt",
        price: "210",
      },
    ],
  },
  {
    id: 3,
    src: Images.TUBE_20_WATTS,
    title: TRACK_PANTS,
    description: "All Colour Available",
    type: TRACK_PANTS,
    images: [
      {
        src: Images.TUBE_20_WATTS,
      },
    ],
    detail: [
      {
        varient: "10 Watt",
        price: "110",
      },
      {
        varient: "20 Watt",
        price: "170",
      },
    ],
  },
  {
    id: 4,
    src: Images.STREET_LIGHTS,
    title: TRACK_SUITS,
    description: "",
    type: TRACK_SUITS,
    images: [
      {
        src: Images.STREET_LIGHTS,
      },
    ],
    detail: [
      {
        varient: "24 Watt",
        price: "1150",
      },
      {
        varient: "36 Watt",
        price: "1350",
      },
      {
        varient: "40 Watt",
        price: "1500",
      },
      {
        varient: "50 Watt",
        price: "1800",
      },
      {
        varient: "60 Watt",
        price: "2100",
      },
    ],
  }
];
