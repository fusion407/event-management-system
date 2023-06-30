import {useState} from 'react'


function EditEventForm({selectedEvent, setSelectedEvent, onEditEvent, events, setEvents}) {
    const [errors, setErrors] = useState()
    const [isLoading, setIsLoading] = useState()
    const { id } = selectedEvent
    const [title, setTitle] = useState(selectedEvent.title)
    const [description, setDescription] = useState(selectedEvent.description)
    const [location, setLocation] = useState(selectedEvent.location)
    const [start_date, setStartDate] = useState(selectedEvent.start_date)
    const [end_date, setEndDate] = useState(selectedEvent.end_date)


    function onEditEvent(updatedEvent){
        setSelectedEvent(updatedEvent)
        const updateEvent = events.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event
        );
        setEvents(updateEvent)
        alert("Event has been updated!")
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/events/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            title, 
            description,
            location,
            start_date,
            end_date,
         }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((event) => onEditEvent(event));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Edit Event</h1>
            <label htmlFor="title">Title: </label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                >
            </input>

            <label htmlFor="description">Description: </label>
            <input 
                type="text" 
                id="description" 
                name="description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                >
            </input>

            <label htmlFor="location">Location: </label>
            <input 
                type="text" 
                id="location" 
                name="location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                >
            </input>
            
            <label htmlFor="start_date">Start Date: (MM/DD/YYYY)</label>
            <input 
                type="text" 
                id="start_date" 
                name="start_date" 
                value={start_date}
                onChange={(e) => setStartDate(e.target.value)}
                >
            </input>        

            <label htmlFor="end_date">End Date: (MM/DD/YYYY)</label>
            <input 
                type="text" 
                id="end_date" 
                name="end_date" 
                value={end_date}
                onChange={(e) => setEndDate(e.target.value)}
                >
            </input>   

            <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
        </form>
    )
}

export default EditEventForm