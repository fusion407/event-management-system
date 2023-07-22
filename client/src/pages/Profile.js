import MyRegsList from "../components/MyRegsList";
import { useEffect, useContext } from "react"
import { UserContext } from '../contexts/UserContext'


function Profile({ myRegs, setMyRegs }) {
  const {user} = useContext(UserContext)

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
  