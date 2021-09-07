

import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "WVgJj2iOE00TzsZb1S4TjADsrE7uz1peRqLyHr_3ReU",
});
export default function SearchPhotos() {

  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);


  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
       
        setPics(json.results);
      });

  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        {" "}
        <label className="label" htmlFor="query">
          {" "}
          Flicker's
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {pics.map((pic) => ( 
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="60%"
              height="60%"
            ></img>
          </div>
        ))}{" "}
      </div>
    </>
  );
}


