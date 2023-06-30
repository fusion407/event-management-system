import EditEventForm from "../components/EditEventForm"

function EditEvent({selectedEvent, setSelectedEvent, events, setEvents}) {
    return(
        <div>
            {selectedEvent ? 
                <EditEventForm 
                    selectedEvent={selectedEvent} 
                    setSelectedEvent={setSelectedEvent}
                    events={events}
                    setEvents={setEvents}
                /> 
                : 
                "Loading..."
            }
        </div>
    )
}

export default EditEvent