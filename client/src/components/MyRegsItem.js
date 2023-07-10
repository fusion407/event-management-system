import { useState } from 'react'

function MyRegsItem(props) {
    const {
        id,
        title,
        description,
        location,
        start_date,
        end_date,
        created_by,
        time_registered,
        participants,
        myRegs,
        setMyRegs,
        // onDeleteRegister
    } = props
    const [participantAmount, setParticipantAmount] = useState(participants)


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
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            <p>Date: {start_date} - {end_date}</p>
            <div>
                <p>Number of participants: {participants ? 
                    <input 
                        type="text" 
                        id="participation" 
                        name="participation" 
                        value={participantAmount} 
                        onChange={() => setParticipantAmount}
                    /> 
                    
                    : "null"}
                    <button>Update</button>
                </p>
            </div>
            <p>Event created by: {created_by}</p>
            <p>Time registered: {time_registered}</p>
            <button onClick={handleUnregister}>Un-register</button>
        </div>
    )
}
export default MyRegsItem