import React, { useState } from "react";

function MusicSearchWidget() {
  //https://itunes.apple.com/search?term=ninho&entity=song
  const [nom, setNom] = useState("");

  const [resultat, setResultat] = useState([]);
  const handleChange = (event) => {
    setNom(event.target.value);
    console.log(nom);
  };

  async function test() {
    const requestOptions = {
      method: "GET",
      headers: {
        origin: "http://localhost:5173",
      },
    };

    await fetch(
      `https://itunes.apple.com/search?term=${nom}&entity=song`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setResultat(result.results);
        console.log(resultat);
        console.log(nom);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
            Search album
          </h2>

          <div className="flex gap-2">
            <input
              type="text"
              onChange={handleChange}
              placeholder="Nom d'une chanson ou d'un artiste"
              className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              onClick={test}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-blue-500 transition"
            >
              search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4">
          {resultat.map((donnees) => (
            <div className="rounded-xl ms-5 my-3 shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white">
              <img
                src={donnees.artworkUrl100}
                alt="City skyline"
                className="w-full h-52 object-cover"
              />
              <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
                {donnees.artistName}
              </h3>

              <p className="text-sm px-4 pb-1 text-gray-600  w-5/6">
                <span className="underline">Titre</span>:
                {donnees.trackCensoredName}
              </p>
              <p className="text-sm px-4 pb-1 text-gray-600 w-5/6">
                <span className="underline">Album</span>:
                {donnees.collectionName}
              </p>

              <a
                href={donnees.trackViewUrl}
                className="text-sm px-4 pb-1 text-blue-800 underline w-5/6"
              >
                En savoir plus
              </a>
              <audio src={donnees.previewUrl} className="mt-2 w-full"></audio>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MusicSearchWidget;
