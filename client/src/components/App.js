import React, { useEffect, useState, useContext } from "react";
import { UserContext } from '../contexts/UserContext'
import { Routes ,Route } from 'react-router-dom';
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import BrowseEvents from "../pages/BrowseEvents";
import NewEvent from "../pages/NewEvent";
import ShowEvent from "../pages/ShowEvent"
import EditEvent from "../pages/EditEvent"
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import NavBar from "./NavBar";

function App() {
  const [events, setEvents] = useState();
  const [myRegs, setMyRegs] = useState();
  const [selectedEvent, setSelectedEvent] = useState()
  const {user, setUser} = useContext(UserContext)


  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
    return (
    <>
      <NavBar handleLogout={handleLogout} />
      <main>
        {user ? (
          <Routes>

            <Route path="/events/new" element={      
              <NewEvent 
                events={events}
                setEvents={setEvents}
                />}
              />

            <Route path="/events/:id/edit" element={
              <EditEvent 
                selectedEvent={selectedEvent}
                setSelectedEvent={setSelectedEvent}  
                events={events}
                setEvents={setEvents}
                />}
              />

            <Route path="/events/:id" element={
                <ShowEvent 
                myRegs={myRegs}
                setMyRegs={setMyRegs}
                selectedEvent={selectedEvent} 
                setSelectedEvent={setSelectedEvent}
              />}
            />

            <Route path="/profile" element={
              <Profile 
                myRegs={myRegs}
                setMyRegs={setMyRegs}
              />}
            />

            <Route path="/events" element={
              <BrowseEvents 
                events={events}
                setEvents={setEvents}
                setSelectedEvent={setSelectedEvent}
              />}
            />

            <Route path="/" element={
              <Home 
              />}
            />

          </Routes>

        ) : (

          <Routes>

            <Route path="/signup" element={<SignUp  />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />

          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
