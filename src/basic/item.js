import ItemDetails from "./itemdetails";

const Itemlist = () =>{
    return(
        <section>
            <h1> Re-use, props, nested component</h1>
            <ItemDetails/>
            <ItemDetails/>
            <ItemDetails/>
            <ItemDetails/>
        </section>
    )
}

export default Itemlist;