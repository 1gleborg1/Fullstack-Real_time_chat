import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import RoomCreatePage from "./RoomCreatePage";
import Room from "./Room";
import HomePage from "./HomePage"; // Убедитесь, что путь к компоненту правильный
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Routes>

                <Route path="/" element={<HomePage  />} />
                <Route path="/join/*" element={<RoomJoinPage />} />
                <Route path="/create" element={<RoomCreatePage />} />
                <Route path="/room/:roomCode" element={<Room />} />

        </Routes>
      </Router>
    );
  }
}