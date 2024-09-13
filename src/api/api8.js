import { useEffect, useState } from "react";

const ApiEight = () => {
    let [allpro, setPro] = useState([]);

    const getPro = () => {
        fetch("http://localhost:1234/productlist")
            .then(response => response.json())
            .then(proArray => {
                setPro(proArray);
            })
    }

    useEffect(() => {
        getPro();
    }, []);

    let[proid, setId]= useState("");
    let[proname, setName] = useState("");
    let[procost, setCost] = useState("");
    let[proqty, setQty] = useState("");

    const save = ()=>{
        if(proid !=""){
            updatePro();
        }else{

        let url ="http://localhost:1234/productlist";
        let newpro = {pname:proname, cost:procost, qty:proqty} ;
        let postData ={
            headers:{'content-Type':'application/json'},
            method : "post",
            body: JSON. stringify(newpro)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(proinfo=>{
            alert(proname + "- Saved Successfully");
            getPro();
            setId("");
            setName("");
            setCost("");
            setQty("");
        })
    }
}
    const delPro =(id) =>{
        let url ="http://localhost:1234/productlist/" + id ;
        let postData={method:"delete"};
        fetch(url, postData)
        .then(response=>response.json())
        .then(proinfo=>{
            alert(proinfo.pname + "- Deleted Successfully !");
            getPro();
        })
    }

    

    const editpro=(pro)=>{
        setId(pro.id);
        setName(pro.pname);
        setCost(pro.cost);
        setQty(pro.qty);
         
    }

    const updatePro=()=>{
        let url ="http://localhost:1234/productlist/"+proid;
        let newpro = {pname:proname, cost:procost, qty:proqty} ;
        let postData ={
            headers:{'content-Type':'application/json'},
            method : "put",
            body: JSON. stringify(newpro)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(proinfo=>{
            alert(proname + "- Updated Successfully");
            getPro();
            setId("");
            setName("");
            setCost("");
            setQty("");

        })
    }
    return (
        <section>
            <h1> {proid} : Total Product : {allpro.length} </h1>
            <table align="left" cellPadding="15">
                <tbody>
                   
                    <tr>
                        <td> Product Name </td>
                        <td> <input type="text" onChange={event =>setName(event.target.value)} value={proname}/> </td>
                    </tr>
                    <tr>
                        <td>Product Cost </td>
                        <td> <input type="text"onChange={event =>setCost(event.target.value)} value={procost}/> </td>
                    </tr>
                    <tr>
                        <td> Product Qty </td>
                        <td> <input type="text" onChange={event =>setQty(event.target.value)} value={proqty}/> </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                        <button  onClick={save}> Save </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table align="right" cellPadding="15">
                <thead>
                    <tr> 
                        <th> SL No </th>
                        <th>  Product Id </th>
                        <th>  Product Name </th>
                        <th>  Product Cost </th>
                        <th>  Product Qty </th>
                        <th> Edit </th>
                        <th> Delete </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        allpro.map((pro, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {pro.id}</td>
                                    <td> {pro.pname}</td>
                                    <td> {pro.cost}</td>
                                    <td> {pro.qty}</td>
                                    <td> <button onClick={obj=>editpro(pro)}> Edit </button> </td>
                                    <td> <button onClick={obj=>delPro(pro.id)}> Delete </button> </td>
                                   
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
        </section>
    )

}

export default ApiEight;