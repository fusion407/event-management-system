import MyRegsList from "../components/MyRegsList";
import {useEffect} from 'react'

function Profile({ user, myRegs, setMyRegs }) {
    useEffect(() => {
        // load registrations
        fetch(`/me/registrations`).then((r) => {
          if (r.ok) {
            r.json().then((reg) => setMyRegs(reg));
          }
        });
      }, []);
    
    return(
        <div>
            <h1>Hello {user.username}, this is your profile!</h1>
            <h1>Your Registrations: </h1>
            <div>
                {myRegs ? <MyRegsList myRegs={myRegs} setMyRegs={setMyRegs} /> : "You have no registrations."}
            </div>
        </div>
    )
  }
  
  export default Profile;
  