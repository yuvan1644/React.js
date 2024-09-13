import { useState } from "react";

const HookTwo = () =>{

    let[userlist, updateUser] = useState([]);
    let[newuser, setUser] = useState(" ");

    const save = ()=>{
        
        updateUser(userlist => [...userlist, newuser]); // a = a+b 
        setUser("");// to clear the textbox
    }

    const delitem= (index)=>{
        userlist.splice(index,1); // delete an element from given position
        updateUser( userlist=> [... userlist]);  // update available element in state so the list will reload
    }

    return(
        <section>
            <h1> State Management Using useState() </h1>
            <p> Total User : { userlist.length} - { newuser}</p>

            <p>
            Enter Full Name : <input type="text" value={newuser} onChange={event=>setUser(event.target.value)}/>
            <button onClick={save}>SAVE</button>
            </p>

            {
                    userlist.map((fullname, index)=>{
                        return(
                            <p key={index} className="four"> {fullname}
                             <br/>
                             <button onClick={event=>delitem(index)}>Delete</button>
                            </p>
                        )
                    })
            }
        </section>
    )    
}
export default HookTwo;