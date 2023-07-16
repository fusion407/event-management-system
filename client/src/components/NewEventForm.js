import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error'

function NewEventForm({user, events, setEvents}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [start_date, setStartDate] = useState("")
    const [end_date, setEndDate] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(null);
    let navigate = useNavigate ();

    function handleAddEvent(e) {
        setEvents([...events, e])
        navigate(`/events/`)
        alert("Successfully added new event!")
      }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            title, 
            description,
            location,
            start_date,
            end_date,
            created_by : user.username
         }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((event) => handleAddEvent(event));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add New Event</h1>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  autoComplete="off"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="description">Description</label>
                <input
                  type="description"
                  id="description"
                  autoComplete="off"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="location">Location</label>
                <input
                  type="location"
                  id="location"
                  autoComplete="off"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="start_date">Start Date (MM/DD/YYYY)</label>
                <input
                  type="start_date"
                  id="start_date"
                  autoComplete="off"
                  value={start_date}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <label htmlFor="end_date">End Date (MM/DD/YYYY)</label>
                <input
                  type="end_date"
                  id="end_date"
                  autoComplete="off"
                  value={end_date}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
                <div>            
                  {errors ? errors.map((error) => <Error key={error} error={error}/>) : ''}
                </div>
            </form>

        </div>
    )
}

export default NewEventForm