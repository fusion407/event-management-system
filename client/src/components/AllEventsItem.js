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
       })
       navigate(`/events/${id}`)
   };
    
    return(
        <div className="cardBoxes">
            <h1>{title}</h1>
            <p><span>Description:</span> {description}</p>
            <p><span>Location:</span> {location}</p>
            <p><span>Date:</span> {start_date} - {end_date}</p>
            <p><span>Created by:</span> {created_by}</p>
            {/* <p>Users: {users.map((user) => <ShowEventsPeople key={user.id} username={user.username}/>)}</p> */}
            <div>
                <Link className="viewEventButton" to={`/events/${id}`} onClick={handleClickShowEvent}>View Event</Link>
            </div>
        </div>
    )
}

export default AllEventsItem