import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="w-full h-screen bg-gradient-to-bl from-teal-400 to-blue-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl">
        We are <b>Almost</b> there!
      </h1>
      <p>Stay tuned for something amazing!!!</p>

      <div className="flex items-center justify-center mt-5">
        <button className="border rounded h-10 bg-gradient-to-bl from-gray-100 to-orange-200 text-black font-light">
          <Link to="/login">Get Started !</Link>
        </button>
      </div>
    </div>
  );
}

export default Index;
