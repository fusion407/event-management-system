import AllEventsItem from './AllEventsItem'
import { useState } from 'react'

function AllEventsList({user, events}) {
    

    const eventsDataList = events.map((data) =>
        <AllEventsItem
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            location={data.location}
            start_date={data.start_date}
            end_date={data.end_date}
            created_by={data.created_by}
        />
    )
    
    return(
        <div>
            {eventsDataList}
        </div>
    )
}

export default AllEventsList