import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData.results);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character/");
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-900">
      <div className="h-4/5 w-4/5 bg-zinc-400 rounded-lg p-10 overflow-auto scrollbar scrollbar-thumb-slate-600 scrollbar-track-transparent">
        <h1 className="text-2xl font-mono pb-10">Rick and Morty Characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {data.map((character, index) => (
            <div className="h-60 w-auto bg-white rounded-lg p-5" key={index}>
              <div className="flex gap-10">
                <img
                  className="w-32 h-32 rounded-full"
                  src={character.image}
                  alt={character.name}
                />
                <div className="py-3">
                  <p>
                    Name:{" "}
                    <b>
                      <i>{character.name}</i>
                    </b>
                  </p>
                  <p>Status: {character.status}</p>
                  <p>Gender: {character.gender}</p>
                  <p>Species: {character.species}</p>
                  <p>Origin: {character.origin.name}</p>
                </div>
              </div>
              <p>Type: {character.type === "" ? "Unknown" : character.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
