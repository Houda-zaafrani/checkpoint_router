import { Button } from 'bootstrap';
import React from 'react'
import { useParams, Link } from "react-router-dom";
const Description = ({ movies }) => {
    const params=useParams()
    const movieD =movies.find(movie => movie.id ==params.id)
  return (
    <div>
      <h3 style={{ color: "#61dafb" }}>Description of the movie</h3>
      <br></br>
      <div
        style={{
          textAlign: "center",
          padding: 10,
          margin: "auto",
          backgroundColor: "rgb(63, 165, 165)",
          width: 320,
          borderRadius: 40,
        }}
      >
        {movieD.description}
      </div>
      <div>
        <Link to="/">
          <button style={{ marginTop: 10 }}>Go back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default Description
