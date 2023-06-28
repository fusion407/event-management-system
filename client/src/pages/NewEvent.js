import NewEventForm from "../components/NewEventForm"

function NewEvent({ user, onAddEvent }) {
    return(
        <div>
            <NewEventForm user={user} onAddEvent={onAddEvent}/>
        </div>
    )
  }
  
  export default NewEvent;
  