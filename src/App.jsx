import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./helpers/random";
import axios from "axios";
import Location from "./components/Location";
import ResidentsList from "./components/ResidentsList";

function App() {
  const [location, setLocation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.locationId.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[url('/images/bg.svg')] bg-cover text-white">
      <form className=" justify-center p-4 items-center relative" onSubmit={handleSubmit}>
        <div className=" flex justify-center top-0  p-4 gap-4 ">
          <input id='locationId' placeholder="Type a location ID..." className="border-2 border-black roun rounded text-black" />
          <button>Search <i className='bx bx-search-alt-2'></i></button>
        </div>

        <h2 className="relative top40 text-green-400 text-4xl font-lato flex text-center p-10 justify-center">Welcome to this crazy mother f@#$ing universe!</h2>
      </form>

      <Location location={location} />
      <ResidentsList location={location} />
    </div>
  );
}

export default App;
