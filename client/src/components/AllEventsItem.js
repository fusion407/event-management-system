import { Link } from "react-router-dom";


function AllEventsItem(props) {
    const {
        id, 
        title, 
        description, 
        location, 
        start_date, 
        end_date, 
        created_by
    } = props
    
    
    return(
        <div className="allEventsCard">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{location}</p>
            <p>{start_date} - {end_date}</p>
            <p>Event created by: {created_by}</p>
            <div>
                <Link to={`/events/${id}`}>View Event</Link>
            </div>
        </div>
    )
}

export default AllEventsItem