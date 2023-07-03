import MyRegsItem from "../components/MyRegsItem"

function MyRegsList({myRegs, setMyRegs}) {

    const myRegsListRender = myRegs.map((reg)=>
        <MyRegsItem 
            key={reg.id}
            id={reg.id}
            title={reg.event.title}
            description={reg.event.description}
            location={reg.event.location}
            start_date={reg.event.start_date}
            end_date={reg.event.end_date}
            created_by={reg.event.created_by}
            time_registered={reg.created_at}
            setMyRegs={setMyRegs}
        />
    )
    
    return(
        <div>
            {myRegs ? myRegsListRender : "No registrations."}
        </div>
    )
}

export default MyRegsList