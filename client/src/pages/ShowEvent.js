import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ShowEventItem from '../components/ShowEventItem'

function ShowEvent({selectedEvent, setSelectedEvent}) {
    const params = useParams();

    useEffect(() => {
        fetch(`/events/${params.id}`).then((r) => {
          if (r.ok) {
            r.json().then((event) => setSelectedEvent(event));
          }
        });
      }, []);    


    return(
        <div>{selectedEvent ? <ShowEventItem selectedEvent={selectedEvent}/> : "loading..."}</div>
    )
}

export default ShowEvent