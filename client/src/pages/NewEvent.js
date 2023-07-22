import NewEventForm from "../components/NewEventForm"

function NewEvent({ events, setEvents }) {

    return(
        <div>
            <NewEventForm events={events} setEvents={setEvents}/>
        </div>
    )
  }
  
  export default NewEvent;
  