import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ShowEventItem from '../components/ShowEventItem'

function ShowEvent() {
    const [theEvent, setTheEvent] = useState()
    const params = useParams();
    
    useEffect(() => {
        // load events
        fetch(`/events/${params.id}`).then((r) => {
          if (r.ok) {
            r.json().then((event) => setTheEvent(event));
          }
        });
      }, []);    


    return(
        <h1>{theEvent ? <ShowEventItem theEvent={theEvent}/> : "loading..."}</h1>
    )
}

export default ShowEvent