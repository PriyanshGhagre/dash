import React, { useState, useEffect } from "react";
import { Card } from ".";
import { listings } from "../data/content"

const HomePage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/listing/guest")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.body.listings[0].title);
          setIsLoaded(true);
          setItems(result.body.listings);
        },
        (error) => {
          setIsLoaded(true);
          setItems(listings.body.listings);
          // setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="mt-12">
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                
                <Card title={item.title} content={item.description} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default HomePage;
