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

//     const eventsPeopleList = users.map((user) =>
//     <ShowEventsPeople
//         key={user.id}
//         id={user.id}
//         username={user.username}
//     />
// )
    
    
    return(
        <div>
            <h1>{title}</h1>
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            <p>Date: {start_date} - {end_date}</p>
            <p>Created by: {created_by}</p>
            <p>Users: {users.map((user) => <ShowEventsPeople key={user.id} username={user.username}/>)}</p>
            <div>
                <Link to={`/events/${id}/edit`}>Edit Event</Link>
            </div>
            <div>
                <label htmlFor="participants"># of participants: </label>
                <input type="text" id="participants" name="participants" value={participants} onChange={(e) => setParticipants(e.target.value)}/>
                <button onClick={onRegisterEvent}>Register</button>
            </div>
        </div>
    )
}

export default ShowEventItem