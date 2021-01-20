import React, { useState } from "react";
import "./styles.css";

const hotelBengaluruDict = {
  biriyani: [
    {
      name: "Shivaji Military Hotel",
      location: "Jaynagar, Bengaluru",
      rating: "4.1/5"
    },
    {
      name: "Gundappa Donne Biryani",
      location: "Sampangi Rama Nagar, Bengaluru",
      rating: "3.5/5"
    },
    {
      name: "Nagarjuna Restaurant",
      location: "All over Bengaluru",
      rating: "4.2/5"
    }
  ],

  breakfast: [
    {
      name: "Vidyarthi Bhavan",
      location: "Basavanagudi, Bengaluru",
      rating: "4.3/5"
    },
    {
      name: "Central Tiffin Room (CTR)",
      location: "Malleshwaram, Bengaluru",
      rating: "4.4/5"
    }
  ],
  pub: [
    {
      name: "Koramangala Social",
      location: "Koramangala, Bengaluru",
      rating: "4.3/5"
    },
    {
      name: "The Big Barbeque",
      location: "Marathahalli, Bengaluru",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [hotelSelected, setHotel] = useState("biriyani");
  function hotelClickHandler(category) {
    setHotel(category);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}> Best Hotels in Bengaluru 🏨 </h1>
      <p style={{ fontSize: "small", textAlign: "center" }}>
        Here are some of the best hotels in Bengaluru.
      </p>

      <div style={{ textAlign: "center" }}>
        {Object.keys(hotelBengaluruDict).map((category) => (
          <button
            onClick={() => hotelClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "#f1faee",
              borderRadius: "0.5rem",
              padding: "0.7rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ marginLeft: "4rem" }}>
          {hotelBengaluruDict[hotelSelected].map((hotel) => (
            <li
              key={hotel.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #e63946",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {hotel.name} </div>
              <div style={{ fontSize: "smaller" }}>
                {hotel.location}, {hotel.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
