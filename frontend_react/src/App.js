import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
