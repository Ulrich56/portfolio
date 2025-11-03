import { useState } from "react";
import { FaItunes } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { useEffect } from "react";
import axios from "axios";

function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.name);

  const [originalCard, setOriginalCard] = useState([]);

  useEffect(() => {
  axios.get("/api/services", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => {
    const data = Array.isArray(res.data) ? res.data : [];
    setOriginalCard(data);
    setCard(data);
  }).catch(() => {
    setOriginalCard([]);
    setCard([]);
  });
  }, []);

  const rechercher = (event) => {
    const value = event.target.value.toLowerCase();
    setCard(originalCard.filter((item) => item.name.toLowerCase().includes(value)));
  };

  const [card, setCard] = useState([]);

  const addToFavorites = (serviceId) => {
  axios.post("/api/favorites", { serviceId }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  .then(() => alert("Ajouté aux favoris !"))
  .catch((err) => console.error(err));
  };

  const iconMap = {
  FaItunes: <FaItunes className="text-red-500 w-[60px] h-[60px] m-3" />,
  FcTodoList: <FcTodoList className="w-[60px] h-[60px] m-3" />,
  MdTimer: <MdTimer className="text-purple-500 w-[60px] h-[60px] m-3" />,
  FaCat: <FaCat className="text-gray-500 w-[60px] h-[60px] m-3" />,
  TiWeatherCloudy: <TiWeatherCloudy className="text-sky-500 w-[60px] h-[60px] m-3" />,
  };

  const renderIcon = (iconName) => {
  if (!iconMap[iconName]) {
    console.warn("Unknown icon :", iconName);
  }
  return iconMap[iconName] || <div className="w-[60px] h-[60px] m-3 bg-gray-300 rounded" />;
};





  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 font-bold text-purple-700 text-2xl">Home Page</div>
        <nav className="mt-8">
          <div className="font-bold text-purple-700 px-6 underline text-lg">
            All Service
          </div>
          <div className="font-bold px-6  text-lg">My Favoris</div>
          <div className="font-bold px-6  text-lg">Service</div>
          <button className="w-full text-left py-3 px-6 text-gray-700 hover:bg-purple-100">
            Music
          </button>
          <button className="w-full text-left py-3 px-6 text-gray-700 hover:bg-purple-100 flex ">
            Todo manager
          </button>
          <button className="w-full text-left py-3 px-6 text-gray-700 hover:bg-purple-100">
            Countdown timer
          </button>
          <button className="w-full text-left py-3 px-6 text-gray-700 hover:bg-purple-100">
            Cat Image
          </button>
          <button className="w-full text-left py-3 px-6 text-gray-700 hover:bg-purple-100">
            weather report
          </button>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-700">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              onChange={rechercher}
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg"
            />
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
              {user.name.slice(0, 4)}
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 place-items-center">
        {Array.isArray(card) && card.length > 0 ? (
        card.map((donnees) => (
          <div className="w-[300px] h-[300px] border m-5 shadow-lg hover:border-sky-500" key={donnees._id}>
            <Link to={donnees.route}>
              <div className="flex">
                <p>{renderIcon(donnees.icon)}</p>
                <p className="w-auto h-[60px] mt-7 font-bold">{donnees.name}</p>
              </div>
              <div>
                <p className="text-center p-5">{donnees.description}</p>
              </div>
            </Link>
            <button
              onClick={() => addToFavorites(donnees._id)}
              className="mt-2 px-4 py-1 bg-purple-500 text-white rounded"
            >
              Ajouter aux favoris
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-10">Aucun service disponible</p>
      )}
    </main>

      </div>
    </div>
  );
}

export default HomePage;
