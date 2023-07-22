import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function Home() {
  const { user } = useContext(UserContext)

  
  if (user) {
    return(
      <>
        <h1>Welcome, {user.username}!</h1>
      </>
    )
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default Home;
