function EventsRegistrationItem(props) {
    const {
        username,
        created_at
    } = props
    return(
        <li>{username} - Registered by: {created_at}</li>
    )
}
export default EventsRegistrationItem