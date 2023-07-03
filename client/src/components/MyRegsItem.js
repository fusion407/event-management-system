import { useState } from 'react'

function MyRegsItem(props) {
    const [errors, setErrors] = useState();


    const {
        id,
        title,
        description,
        location,
        start_date,
        end_date,
        created_by,
        time_registered,
        myRegs,
        setMyRegs,
        // onDeleteRegister
    } = props

    function onDeleteRegister() {
        setMyRegs((myRegs) =>
          myRegs.filter((reg) => reg.id !== id)
        );
      }

    function handleUnregister() {
        fetch(`/registrations/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeleteRegister();
          }
        });
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