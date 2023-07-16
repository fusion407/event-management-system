import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ShowEventItem from '../components/ShowEventItem'
import { useNavigate } from "react-router-dom";
import Error from '../components/Error'

function ShowEvent({user, selectedEvent, setSelectedEvent, onRegisterEvent, myRegs, setMyRegs}) {
    const {id} = useParams();
    const [errors, setErrors] = useState();
    const [participants, setParticipants] = useState(1)
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch(`/events/${id}`).then((r) => {
    //       if (r.ok) {
    //         r.json().then((event) => setSelectedEvent(event));
    //       }
    //     });
    //   }, []);    
    console.log(selectedEvent)
    function handleRegisterEvent(registration) {
     setMyRegs([...myRegs, registration])
     setSelectedEvent(registration)
    }
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
           participants: participants
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
     console.log(participants)

    return(
        <div>
            <div className="cardBoxes">
              {selectedEvent ? <ShowEventItem 
                                    selectedEvent={selectedEvent} 
                                    onRegisterEvent={onRegisterEvent}
                                    participants={participants}
                                    setParticipants={setParticipants}
                                    /> 
                                : "loading..."}
                {errors ? errors.map((error) => <Error key={error} error={error}/>) : ""}
            </div>
        </div>
    )
}

export default ShowEvent