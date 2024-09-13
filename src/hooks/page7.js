import { useState } from "react";

const HookSeven=()=>{
    let[mymessage, setMessage]= useState("");
     return(
        <section align="center">
            <h1 align="center">What is Your Message</h1>

            <textarea cols={50} rows={10} onChange={event=>setMessage(event.target.value)}></textarea>
            <br/><br/>

            <table align="center" cellPadding="15">
                <tr>
                    <td>Youe Message: {mymessage}</td>
                </tr>
                <tr>
                    <td>Your Message length : { mymessage.length} char</td>
                </tr>
            </table>
        </section>
     )
}

export default HookSeven;