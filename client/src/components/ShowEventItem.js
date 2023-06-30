import { Link } from "react-router-dom";

function ShowEventItem({selectedEvent}) {

    const {
        id,
        title,
        description,
        location,
        start_date,
        end_date,
        created_by
    } = selectedEvent


    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{location}</p>
            <p>{start_date} - {end_date}</p>
            <p>Created by: {created_by}</p>
            <div>
                <Link to={`/events/${id}/edit`}>Edit Event</Link>
            </div>
            <div>
                <button>Register</button>
            </div>
        </div>
    )
}

export default ShowEventItem