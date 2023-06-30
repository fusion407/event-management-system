function ShowEventItem({theEvent}) {
    const {
        title,
        description,
        location,
        start_date,
        end_date,
        created_by
    } = theEvent
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{location}</p>
            <p>{start_date} - {end_date}</p>
            <p>Created by: {created_by}</p>
        </div>
    )
}

export default ShowEventItem