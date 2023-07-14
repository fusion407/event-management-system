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
    } = props
    const [participantAmount, setParticipantAmount] = useState(participants)

    function onUpdateRegistration(updatedReg){
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
            r.json().then((reg) => onUpdateRegistration(reg));
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
        <div className='cardBoxes'>
            <h1>{title}</h1>
            <p><span>Description:</span> {description}</p>
            <p><span>Location:</span> {location}</p>
            <p><span>Date:</span> {start_date} - {end_date}</p>
            <div>
                <p><span>Number of Participants: </span>
                    <input 
                        type="text" 
                        id="participation" 
                        name="participation" 
                        value={participantAmount} 
                        onChange={(e) => setParticipantAmount(e.target.value)}
                    /> 
                    
                    <button className='viewEventButton' onClick={handleUpdate}>Update</button>
                    {errors ? <li>{errors}</li> : ''}
                </p>
            </div>
            <p><span>Created by:</span> {created_by}</p>
            <p><span>Time registered:</span> {time_registered}</p>
            <button className='unregisterButton' onClick={handleUnregister}>Un-register</button>
        </div>
    )
}
export default MyRegsItem