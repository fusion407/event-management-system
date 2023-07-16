import { Link } from "react-router-dom";
import ShowEventsPeople from "./ShowEventsPeople";

function ShowEventItem({selectedEvent, onRegisterEvent, participants, setParticipants}) {

    const {
        id,
        title,
        description,
        location,
        start_date,
        end_date,
        created_by,
        users
    } = selectedEvent
    
    
    return(
        <div>
            <h1>{title}</h1>
            <p><span>Description:</span> {description}</p>
            <p><span>Location:</span> {location}</p>
            <p><span>Date:</span> {start_date} - {end_date}</p>
            <p><span>Created by:</span> {created_by}</p>
            <p><span>Users:</span> {users.map((user) => <ShowEventsPeople key={user.id} username={user.username}/>)}</p>
            <div>
                <Link className='viewEventButton' to={`/events/${id}/edit`}>Edit Event</Link>
            </div>
            <div>
                <label htmlFor="participants"># of participants: </label>
                <input type="text" id="participants" name="participants" value={participants} onChange={(e) => setParticipants(e.target.value)}/>
                <button className='registerEventButton' onClick={onRegisterEvent}>Register</button>
            </div>
        </div>
    )
}

export default ShowEventItem