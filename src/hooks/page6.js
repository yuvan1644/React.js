import { useState } from "react";

const HookSix=()=>{
    let[alluser, setUser]= useState([{fullname:"Alex" , age:"40 years", edu:"MCA"}]);
    let[fname, pickName]= useState("");
    let[age, pickAge]= useState("");
    let[edu, pickEdu]= useState("");

    let[message, UpdateMessage]= useState("");


    const save=()=>{
         let newuser= {fullname: fname, age:age + " "+"years", edu:edu};
         setUser( alluser=>[...alluser, newuser]);
         UpdateMessage(fname +"  "+ "Save Successfully !");
         pickName("");
         pickAge("");
         pickEdu("");

    }


    const deluser =(index)=>{
        alluser.splice(index, 1); 
        setUser( alluser=> [... alluser]);  
        UpdateMessage("Record Deleted Successfully !");
    }

   return(
       <section>
          <h1 align="center">Array of object Save, List, Delete</h1>   <br/>

           <p align="center">{message}</p>

           <div align="center">
             <input type="text" placeholder="Enter Name" className="smallinput" onChange={event=>pickName(event.target.value)} value={fname}/>
             <input type="number" placeholder="Enter Age" className="smallinput" onChange={event=>pickAge(event.target.value)} value={age}/>
             <input type="text" placeholder="Enter Education" className="smallinput" onChange={event=>pickEdu(event.target.value)} value={edu}/>

             <button onClick={save}>Save User</button>
           </div>

          <table align="center" cellPadding="12">
            <thead>
                <tr>
                    <th>SL NO</th>
                    <th>UserNmae</th>
                    <th>AGE</th>
                    <th>EDU</th>
                </tr>
            </thead>

              <tbody>
                 {
                    alluser.map((user,index)=>{ 
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{user.fullname}</td>
                                <td>{user.age}</td>
                                <td>{user.edu}</td>
                                <td>
                                    <button onClick={event=>deluser(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                 }
              </tbody>
          </table>
       </section>
   )
} 

export default HookSix;