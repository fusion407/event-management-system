function MyRegsItem(props) {
    const {
        id,
        title,
        description,
        location,
        start_date,
        end_date,
        created_by,
        time_registered
    } = props

    function handleUnregister(e) {
        e.preventDefault()
        console.log("un-registered")
        console.log("removed: " + title)
    }

    return(
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{location}</p>
            <p>{start_date} - {end_date}</p>
            <p>Host: {created_by}</p>
            <p>Time registered: {time_registered}</p>
            <button onClick={handleUnregister}>Un-register</button>
        </div>
    )
}
export default MyRegsItem