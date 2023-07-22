import AllEventsList from "../components/AllEventsList"
import { useEffect } from "react"

function BrowseEvents({ events, setEvents, setSelectedEvent }) {
    useEffect(() => {
        // load event data
        fetch("/events").then((r) => {
          if (r.ok) {
            r.json().then((event) => setEvents(event));
          }
        });
      }, []);
    
    return(
        <div>
            {events ? <AllEventsList events={events} setSelectedEvent={setSelectedEvent} />: "Loading..."}
        </div>
    )
  }
  
  export default BrowseEvents;
  