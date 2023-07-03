import React, { useEffect, useState } from "react";
import { Switch ,Route } from 'react-router-dom';
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import BrowseEvents from "../pages/BrowseEvents";
import NewEvent from "../pages/NewEvent";
import ShowEvent from "../pages/ShowEvent"
import EditEvent from "../pages/EditEvent"
import Profile from "../pages/Profile";
import NavBar from "./NavBar";
import Home from "../pages/Home";

function App() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState();
  const [myRegs, setMyRegs] = useState();
  const [errors, setErrors] = useState();
  const [selectedEvent, setSelectedEvent] = useState()
  const [newRegistration, setNewRegistration] = useState()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    // load events
    fetch("/events").then((r) => {
      if (r.ok) {
        r.json().then((event) => setEvents(event));
      }
    });
  }, []);

  useEffect(() => {
    // load registrations
    fetch(`/me/registrations`).then((r) => {
      if (r.ok) {
        r.json().then((reg) => setMyRegs(reg));
      }
    });
  }, []);

  function onRegisterEvent(e) {
    e.preventDefault()
    fetch("/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        user_id: user.id, 
        event_id: selectedEvent.id,
     }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((reg) => setMyRegs([...myRegs, reg]));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });  
  }


  



    return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/events/new">
              <NewEvent user={user} onAddEvent={(e) => setEvents([...events, e])}/>
            </Route>
            <Route path="/events/:id/edit">
              <EditEvent 
                selectedEvent={selectedEvent} 
                setSelectedEvent={setSelectedEvent} 
                events={events} 
                setEvents={setEvents}
              />
            </Route>
            <Route path="/events/:id">
              <ShowEvent 
                onRegisterEvent={onRegisterEvent} 
                selectedEvent={selectedEvent} 
                setSelectedEvent={setSelectedEvent}
              />
            </Route>

            <Route path="/profile">
              <Profile 
                user={user}
                myRegs={myRegs}
                setMyRegs={setMyRegs}
                // onDeleteRegister={onDeleteRegister}
              />
            </Route>
            <Route path="/events">
              <BrowseEvents user={user} events={events}/>
            </Route>

            <Route path="/">
              <Home user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
