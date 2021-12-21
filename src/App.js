import { Middle } from "./components/Middle";
import { Upper } from "./components/Upper";
import { Lower } from "./components/Lower";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const API_URL = "https://pokeapi.co/api/v2/pokemon";
  const TOTAL_POKE = 898;

  const [middleStyle, setMiddleStyle] = useState("close_box");
  const [lowerStyle, setLowerStyle] = useState("view_box_off");
  const [isOpen, setIsOpen] = useState(false);
  const [pokeId, setPokeId] = useState(1);
  const [pokeData, setpokeData] = useState({
    name: "",
    id: "",
    weight: "",
    types: [],
    abilities: [],
    img: [],
  });

  const open_box = () => {
    setMiddleStyle("open_box");
    setLowerStyle("view_box_on");
    setIsOpen(false);
  };
  const close_box = () => {
    setMiddleStyle("close_box");
    setLowerStyle("view_box_off");
    setIsOpen(true);
  };

  const pokeRandom = () => {
    setPokeId(Math.floor(Math.random() * TOTAL_POKE + 1));
  };

  const getPokeData = async (id) => {
    await axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        setpokeData({
          name: response.data.name,
          id: response.data.id,
          weight: response.data.weight,
          types: response.data.types,
          abilities: response.data.abilities,
          img: response.data.sprites.other["official-artwork"].front_default,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleClick = () => {
    if (isOpen) {
      open_box();
      pokeRandom();
      getPokeData(pokeId);
    } else {
      close_box();
    }
  };

  useEffect(() => {
    close_box();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <main className="container">
              <Upper handleClick={handleClick} />
              <Middle
                middleStyle={middleStyle}
                lowerStyle={lowerStyle}
                getPokeData={getPokeData}
                pokeData={pokeData}
                setPokeId={setPokeId}
                pokeId={pokeId}
              />
              <Lower handleClick={handleClick} />
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
