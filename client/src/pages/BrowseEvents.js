import AllEventsList from "../components/AllEventsList"

function BrowseEvents({ user, events, setSelectedEvent }) {

    
    return(
        <div>
            {events ? <AllEventsList user={user} events={events} setSelectedEvent={setSelectedEvent} />: "Loading..."}
        </div>
    )
  }
  
  export default BrowseEvents;
  