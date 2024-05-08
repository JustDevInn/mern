import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full p-6">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App

// https://www.youtube.com/watch?v=4nKWREmCvsE

// client npm run dev
// server node --env-file=config.env server