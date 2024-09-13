import { useState } from "react";

const HookNine =()=>{
      let[allcity, setCity]= useState([]);

      const getCity =()=>{
           fetch("city.json")
           .then(abc =>abc.json())
           .then(cityArray=>{
              setCity(cityArray);
           })
      }

     let [allbook, setBook]=useState([]);
      const getBook =()=>{
        fetch("book.json")
        .then(xyz =>xyz.json())
        .then(bookArray=>{
           setBook(bookArray);
        })
      }

      return(
         <section align="center">
            <h1>How to use fetch() </h1>

            <div>
            <button onClick={getCity}>Show City : {allcity.length} </button>
            <button onClick={getBook}>Show Book : {allbook.length}</button>
            </div>

            <fieldset>
                <legend>City : {allcity.length}</legend>
                {
                   allcity.map((cityName, index)=>{
                    return(
                        <p key={index}>{cityName}</p>
                          )
                   })
                }
                
            </fieldset>

            <fieldset>
                <legend>Book : {allbook.length}</legend>
                {
                   allbook.map((book, index)=>{
                    return(
                        <p key={index}>{book.bname}: {book.cost}</p>
                          )
                   })
                }
                
            </fieldset>
         </section>
      )
}


export default HookNine;