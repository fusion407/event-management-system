import React, { useEffect, useState } from "react";
import { Switch ,Route } from 'react-router-dom';
import SignUp from "./SignUp";
import Login from "./Login";
import BrowseEvents from "./BrowseEvents";
import NewEvent from "./NewEvent";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);

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
          <Switch>
            <Route path="/events/new">
              <NewEvent user={user}/>
            </Route>
            <Route path="/profile">
              <Profile user={user}/>
            </Route>
            <Route path="/events">
              <BrowseEvents user={user}/>
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
