import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../contexts/UserContext'

function NavBar({ handleLogout }) {
  const {user} = useContext(UserContext)

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
        <Link to="/events">Browse Events</Link>
        <Link to="/events/new">New Event</Link>
      </div>
      <div>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
