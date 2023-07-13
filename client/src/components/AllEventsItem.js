import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ShowEventsPeople from "./ShowEventsPeople";

function AllEventsItem({id, title, description, location, start_date, end_date, created_by, users, setSelectedEvent}) {
    // const {
    //     id, 
    //     title, 
    //     description, 
    //     location, 
    //     start_date, 
    //     end_date, 
    //     created_by
    // } = props
    
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
        created_by,
        users,
        setSelectedEvent
       })
       navigate(`/events/${id}`)
   };
    
    return(
        <div className="allEventsCard">
            <h1>{title}</h1>
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            <p>Date: {start_date} - {end_date}</p>
            <p>Event created by: {created_by}</p>
            <p>Users: {users.map((user) => <ShowEventsPeople key={user.id} username={user.username}/>)}</p>
            <div>
                <Link to={`/events/${id}`} onClick={handleClickShowEvent}>View Event</Link>
            </div>
        </div>
    )
}

export default AllEventsItem