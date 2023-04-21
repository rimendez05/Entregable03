import React from "react";

const Location = ({ location }) => {

  return (
    <section className="bg-[url('/images/bg2.svg')] grid justify-center p-40 bg-center bg-cover w-100 h-100 rounded-full">
      <h2 className="text-3xl font-bold text-white text-center">{location?.name}</h2>
      <ul className="text-white text-xl text-center font-bold ">
        <li>Type: {location?.type}</li>
        <li>Dimension: {location?.dimension}</li>
        <li>Population: {location?.residents.length}</li>
      </ul>
    </section>
  );
};

export default Location;
