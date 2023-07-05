import NewEventForm from "../components/NewEventForm"

function NewEvent({ user, events, setEvents }) {
    return(
        <div>
            <NewEventForm user={user} events={events} setEvents={setEvents}/>
        </div>
    )
  }
  
  export default NewEvent;
  