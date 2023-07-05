import { Link } from "react-router-dom";

function ShowEventItem({selectedEvent, onRegisterEvent}) {

    const {
        id,
        title,
        description,
        location,
        start_date,
        end_date,
        created_by,
    } = selectedEvent

    return(
        <div>
            <h1>{title}</h1>
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            <p>Date: {start_date} - {end_date}</p>
            <p>Created by: {created_by}</p>
            <div>
                <Link to={`/events/${id}/edit`}>Edit Event</Link>
            </div>
            <div>
                <button onClick={onRegisterEvent}>Register</button>
            </div>
        </div>
    )
}

export default ShowEventItem