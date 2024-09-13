import { useState } from "react";

const HookFive=()=>{
     let [allproduct, setProduct]= useState([]);
     let [newproduct, pickProduct]= useState("");

     const save=()=>{
        setProduct(allproduct=>[...allproduct, newproduct]);
        pickProduct("");
     }

     //textbox sending to pickproduct to newproduct to allproduct to HTML

     return(
        <section>
            <h1 align="center">Manage Product: {allproduct.length}</h1>
            <p align="center">
                Enter product Url : <input type="text" size="80" onChange={event=>pickProduct(event.target.value)} value={newproduct}/>
             </p>

               <p align="center">
                <button onClick={save}>SAVE</button>
            </p>

              {
                allproduct.map((purl, index)=>{
                    return(
                        <img src={purl} className="four" height="200" key={index}/>
                    )
                })
              }
        </section>
     )
}

export default HookFive;