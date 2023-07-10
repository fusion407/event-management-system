import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ShowEventItem from '../components/ShowEventItem'
import EventsRegistrationItem from '../components/EventsRegistrationItem'
import { useNavigate } from "react-router-dom";

function ShowEvent({user, selectedEvent, setSelectedEvent, onRegisterEvent, myRegs, setMyRegs}) {
    const params = useParams();
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/events/${params.id}`).then((r) => {
          if (r.ok) {
            r.json().then((event) => setSelectedEvent(event));
          }
        });
      }, []);    
      function onRegisterEvent(e) {
        e.preventDefault()
        fetch("/registrations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            user_id: user.id, 
            event_id: selectedEvent.id,
         }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((reg) => setMyRegs([...myRegs, reg]));
            navigate(`/events`);
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });  
      }

    return(
        <div>
            <div>
                {selectedEvent ? <ShowEventItem selectedEvent={selectedEvent} onRegisterEvent={onRegisterEvent}/> : "loading..."}
            </div>
            <div>{errors ? errors : ""}</div>
        </div>
    )
}

export default ShowEvent