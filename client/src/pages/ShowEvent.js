import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ShowEventItem from '../components/ShowEventItem'
import EventsRegistrationItem from '../components/EventsRegistrationItem'

function ShowEvent({selectedEvent, setSelectedEvent, onRegisterEvent, registrations, setRegistrations}) {
    const params = useParams();

    useEffect(() => {
        fetch(`/events/${params.id}`).then((r) => {
          if (r.ok) {
            r.json().then((event) => setSelectedEvent(event));
          }
        });
      }, []);    

    return(
        <div>
            <div>
                {selectedEvent ? <ShowEventItem selectedEvent={selectedEvent} onRegisterEvent={onRegisterEvent}/> : "loading..."}
            </div>
        </div>
    )
}

export default ShowEvent