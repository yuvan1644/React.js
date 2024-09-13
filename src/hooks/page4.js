import { useState } from "react";

const HookFour =()=>{
    let[myname, setName]= useState("");
    let[mymobile, setMobile]= useState();
    let[myemail, setEmail]= useState("");
    let[myaddress, setAddress]= useState("");
   return(
      <section>
        <h1>React Input and Output</h1>

         <table cellPadding="15">
             <tbody>
                <tr>
                    <td>Full Name</td>
                   <td><input type="text" onChange={event=>setName(event.target.value)}/></td>
                   <td>{myname}</td>
                </tr>

                <tr>
                    <td>Mobile No</td>
                   <td><input type="number" onChange={event=>setMobile(event.target.value)}/></td>
                   <td>{mymobile}</td>
                </tr>

                <tr>
                    <td>Email ID</td>
                   <td><input type="email" onChange={event=>setEmail(event.target.value)}/></td>
                   <td>{myemail}</td>
                </tr>

                <tr>
                    <td>Address</td>
                   <td><textarea onChange={event=>setAddress(event.target.value)}></textarea></td>
                   <td>{myaddress}</td>
                </tr>
             </tbody>
         </table>
      </section>
   )
}

export default HookFour;