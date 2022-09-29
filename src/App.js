import "./styles.css";
import React from "react";
import { useState } from "react";

const Songs = {
  SidhuMooseWala: [
    {
      song: "295",
      rating: "4.5/5",
      link:
        "https://www.youtube.com/results?search_query=295https://www.youtube.com/watch?v=n_FCrCQ6-bA"
    },
    {
      song: "Old Skool",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=hBlO1i_WTiY"
    }
  ],
  Diljit: [
    {
      song: "5 tara",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=MsTW5cyWKj4"
    },
    {
      song: "peed",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=cXUndHRKmXQ"
    }
  ],

  APDhillon: [
    {
      song: "brown munde",
      rating: "4.5/5",
      link: "https://www.youtube.com/watch?v=VNs_cCtdbPc"
    },
    {
      song: "Insane",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=cqP8I5aaud8"
    }
  ]
};
// creating an array to display singers on the button
let songsArr = Object.keys(Songs);

export default function App() {
  // creating state so as to change the singers on view
  let [meaning, setter] = useState("SidhuMooseWala");

  function changeEvent(event) {
    console.log(event);
    setter(event);
  }
  return (
    <div className="App">
      <h1>Punjabi Song Recommendation</h1>
      <h3>Checkout my favorite songs</h3>
      <div>
        {songsArr.map((x) => {
          return (
            <button
              style={{
                padding: "0.5rem",
                margin: "1rem",
                backgroundColor: "#fb923c",
                cursor: "pointer",
                borderRadius: "5px",
                border: "1px solid black",
                fontWeight: "bold"
              }}
              onClick={() => changeEvent(x)}
            >
              {x}
            </button>
          );
        })}
      </div>
      <hr />

      <div>
        {Songs[meaning].map((x) => {
          return (
            <ul
              style={{
                border: "2px solid black",
                padding: "1rem",
                listStyle: "none",
                width: "60%",
                margin: "auto",
                marginBottom: "60px"
              }}
              className
            >
              <li
                style={{
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  marginBottom: "10px"
                }}
                className
              >
                {x.song}
              </li>
              <li
                style={{
                  marginBottom: "20px"
                }}
              >
                {x.rating}
              </li>
              <a
                target="_blank"
                style={{
                  alignItems: "right",
                  textAlign: "right",
                  justifyContent: "right",
                  margin: "auto",
                  textDecoration: "none",
                  color: "black",
                  border: "2px solid black",
                  padding: "2px",
                  backgroundColor: "#fb923c"
                }}
                className
                href={x.link}
              >
                Listen
              </a>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
