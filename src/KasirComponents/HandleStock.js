export default function HandleStock(props){
    
    



    if(typeof props.selectedProductStock === "number"){

                return (<>

                    <span className="row w-75">
                        <h3 className="border border-1 rounded col-6 text-center p-2">Stok</h3>
                        <h3 className="bg-secondary text-light p-2 col-6  text-center">{props.selectedProductStock - props.quantity}</h3>
                    </span>

                    <span className="row w-75">
                        <h3 className="border border-1 rounded col-6 text-center p-2">order</h3>
                        <h1 className="bg-secondary text-light p-2 col-6  text-center">{props.quantity}</h1>
                    </span>
                    
                    <span className="row w-75  d-flex justify-content-center">{props.quantity < props.selectedProductStock &&  <button className="btn btn-outline-secondary w-25" onClick={props.handleAddQuantity}>+</button>}</span>

                    <span className="row w-75 d-flex justify-content-center mb-2">{props.quantity > 1 && <button className="btn btn-outline-secondary w-25" onClick={props.handleDecQuantity}>-</button>}</span>

                    <span className="row w-75">
                        <h3 className="border border-1 rounded col-6 text-center p-2">Total</h3>
                        <h1 className="bg-secondary text-light p-2 col-6  text-center">Rp.{props.quantity * props.price},-</h1>
                    </span>
                
                
                </>)}




                

    if(typeof props.selectedProductStock === "boolean"){

          return(<>
    
                <span className="row w-75">
                    <h3 className="border border-1 rounded col-6 text-center p-2">order</h3>
                    <h1 className="bg-secondary text-light p-2 col-6  text-center">{props.quantity}</h1>
                </span>

                <span className="row w-75 row w-75  d-flex justify-content-center"> <button className="btn btn-outline-secondary w-50" onClick={props.handleAddQuantity}>+</button></span>

                <span className="row w-75 row w-75  d-flex justify-content-center mb-2">{props.quantity > 1 && <button className="btn btn-outline-secondary w-50" onClick={props.handleDecQuantity}>-</button>}</span>

                <span className="row w-75">
                    <h3 className="border border-1 rounded col-6 text-center p-2">Total</h3>
                    <h1 className="bg-secondary text-light p-2 col-6  text-center">Rp.{props.quantity * props.price},-</h1>
                    </span>
    


             </>)}
    

   



     }
