import AllEventsList from "../components/AllEventsList"

function BrowseEvents({ user, events }) {

    
    return(
        <div>
            {events ? <AllEventsList user={user} events={events} />: "Loading..."}
        </div>
    )
  }
  
  export default BrowseEvents;
  