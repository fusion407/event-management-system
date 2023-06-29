import AllEventsList from "../components/AllEventsList"

function BrowseEvents({ user, events }) {
    return(
        <div>
            <AllEventsList user={user} events={events}/>
        </div>
    )
  }
  
  export default BrowseEvents;
  