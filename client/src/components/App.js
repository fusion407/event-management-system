import React, { useEffect, useState } from "react";
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
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState();
  const [myRegs, setMyRegs] = useState();
  const [selectedEvent, setSelectedEvent] = useState()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


    return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Routes>

            <Route path="/events/new" element={      
              <NewEvent 
                user={user} 
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
                user={user}
                myRegs={myRegs}
                setMyRegs={setMyRegs}
                selectedEvent={selectedEvent} 
                setSelectedEvent={setSelectedEvent}
              />}
            />

            <Route path="/profile" element={
              <Profile 
                user={user}
                myRegs={myRegs}
                setMyRegs={setMyRegs}
              />}
            />

            <Route path="/events" element={
              <BrowseEvents 
                user={user} 
                events={events}
                setEvents={setEvents}
                setSelectedEvent={setSelectedEvent}
              />}
            />

            <Route path="/" element={
              <Home 
                user={user}
              />}
            />

          </Routes>

        ) : (

          <Routes>

            <Route path="/signup" element={<SignUp setUser={setUser} />}/>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/" element={<Home />} />

          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
