import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Routes, Route, Link } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />
              <Route path="/" element={<h1>Welcome</h1>} />
            </Routes>

            {/* {react-router ->chat screen} */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
