import { useState } from "react";

const HookEight=()=>{
    let[allpro, setProduct]= useState([{Productname:"Apple" , price:"Rs.100"}]);
    let[pname, pickName]= useState("");
    let[price, pickPrice]= useState("");
    

    let[message, UpdateMessage]= useState("");


    const save=()=>{
         let newpro= {Productname: pname, price:"Rs."+price};
         setProduct( allpro=>[...allpro, newpro]);
         UpdateMessage(pname +"  "+ "Save Successfully !");
         pickName("");
         pickPrice("");
        

    }


    const delpro =(index)=>{
        allpro.splice(index, 1); 
        setProduct( allpro=> [... allpro]);  
        UpdateMessage("Record Deleted Successfully !");
    }

   return(
       <section>
          <h1 align="center">Product Details</h1>   <br/>

           <p align="center">{message}</p>

           <div align="center">
            <p> <input type="text" placeholder="Enter Product Name" className="smallinput" onChange={event=>pickName(event.target.value)} value={pname}/> </p>
            <p> <input type="number" placeholder="Enter Price" className="smallinput" onChange={event=>pickPrice(event.target.value)} value={price}/> </p>
            

             <button onClick={save}>Save Product</button>
           </div>

          <table align="center" cellPadding="12">
            <thead>
                <tr>
                    <th>SL NO</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    
                </tr>
            </thead>

              <tbody>
                 {
                    allpro.map((product,index)=>{ 
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{product.Productname}</td>
                                <td>{product.price}</td>
                               
                                <td>
                                    <button onClick={event=>delpro(index)}>Delete</button>
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

export default HookEight;