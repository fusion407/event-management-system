import {useState, useContext } from 'react';
import {useParams} from 'react-router-dom';
import ShowEventItem from '../components/ShowEventItem'
import { useNavigate } from "react-router-dom";
import Error from '../components/Error'


function ShowEvent({ selectedEvent, onRegisterEvent, myRegs, setMyRegs}) {
    const {id} = useParams();
    const [errors, setErrors] = useState();
    const [participants, setParticipants] = useState(1)
    const navigate = useNavigate();

     function onRegisterEvent(e) {
       e.preventDefault()
       fetch("/registrations", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ 
           event_id: id,
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