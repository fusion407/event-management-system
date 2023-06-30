import MyRegsList from "../components/MyRegsList";

function Profile({ user, myRegs, setMyRegs }) {
    return(
        <div>
            <h1>Hello {user.username}, this is your profile!</h1>
            <h1>Your Registrations: </h1>
            <div>
                {myRegs ? <MyRegsList myRegs={myRegs} setMyRegs={setMyRegs}/> : "You have no registrations."}
            </div>
        </div>
    )
  }
  
  export default Profile;
  