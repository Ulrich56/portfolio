import "./App.css";
import { createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import MusicSearchWidget from "./components/MusicSearchWidget";
import HomePage from "./components/homePage";
import TodoApp from "./components/TodoApp";
import CountDown from "./components/CountDown";
import Index from "./components";
import Cat from "./components/cat";
import Meteo from "./components/meteo";

const router = createBrowserRouter([
  { path: "/dashboard", element: <HomePage /> },
  { path: "/admin", element: <Dashboard /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/musicSearch", element: <MusicSearchWidget /> },
  { path: "/todo", element: <TodoApp /> },
  { path: "/timer", element: <CountDown /> },
  { path: "/cat", element: <Cat /> },
  { path: "/meteo", element: <Meteo /> },
  { path: "/", element: <Index /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
