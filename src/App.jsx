// src/App.js

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <ToastContainer />
      {/* Add your app content here */}
      <Home />
    </div>
  );
}

export default App;
