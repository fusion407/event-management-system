import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AllEventsItem({id, title, description, location, start_date, end_date, created_by, users, setSelectedEvent}) {
    
    const navigate = useNavigate();

    const handleClickShowEvent = (e) => {
       e.preventDefault();
       setSelectedEvent({
        id,
        title,
        description,
        location,
        start_date,
        end_date,
        users,
       })
       navigate(`/events/${id}`)
   };
    
    return(
        <div className="cardBoxes">
            <h1>{title}</h1>
            <p><span>Description:</span> {description}</p>
            <p><span>Location:</span> {location}</p>
            <p><span>Date:</span> {start_date} - {end_date}</p>
            <div>
                <Link className="viewEventButton" to={`/events/${id}`} onClick={handleClickShowEvent}>View Event</Link>
            </div>
        </div>
    )
}

export default AllEventsItem