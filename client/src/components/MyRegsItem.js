import { useState } from 'react'

function MyRegsItem(props) {
  const [errors, setErrors] = useState()
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
        setMyRegs
        // onDeleteRegister
    } = props
    const [participantAmount, setParticipantAmount] = useState(participants)

    function onEditRegistration(updatedReg){
      const updateRegistration = myRegs.map((reg) =>
          reg.id === updatedReg.id ? updatedReg : reg
      );
      setMyRegs(updateRegistration)
      console.log(updateRegistration)
      alert("Registration has been updated!")

  }


    function onDeleteRegister() {
        setMyRegs((myRegs) =>
          myRegs.filter((reg) => reg.id !== id)
        );
      }
      function handleUpdate(e) {
        e.preventDefault();
        fetch(`/registrations/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            participants : participantAmount
         }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((reg) => onEditRegistration(reg));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
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
                <p>Number of participants:
                    <input 
                        type="text" 
                        id="participation" 
                        name="participation" 
                        value={participantAmount} 
                        onChange={(e) => setParticipantAmount(e.target.value)}
                    /> 
                    
                    <button onClick={handleUpdate}>Update</button>
                    {errors ? errors : ''}
                </p>
            </div>
            <p>Event created by: {created_by}</p>
            <p>Time registered: {time_registered}</p>
            <button onClick={handleUnregister}>Un-register</button>
        </div>
    )
}
export default MyRegsItem