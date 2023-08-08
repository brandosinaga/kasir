export default function TableCartRow(props){


    const stock = props.loginAuthentification.dataEnter.products.find(produk => produk.name === props.item.namaProduk.trim());

   
  


    return (<tr className="text-center">
                <td>{props.item.number}</td>
                <td>{props.item.namaProduk}</td>
                <td>Rp.{props.item.price.toLocaleString("id-ID")},-</td>
                <td>

                   <EditQuantityInCart handleAdd = {props.handleAdd} handleDec = {props.handleDec} item = {props.item} stock = {stock.stock} />
               
                </td>
                <td>Rp.{props.item.totalPerItem.toLocaleString("id-ID")},-</td>
                <td>
                    <button className="btn btn-outline-danger" onClick={() => props.handleHapusFromCart(props.item.namaProduk)}>hapus</button>
              </td>
    </tr>)


}


function EditQuantityInCart(props){

    

    if(typeof props.stock === "boolean"){

    return(<>
    
                 <span><button onClick={() => props.handleAdd(props.item)}>+</button></span>
                 <span>{props.item.quantity}</span>
                {props.item.quantity > 1 &&<span><button onClick={() => props.handleDec(props.item)}>-</button></span>}

    </>)}


if(typeof props.stock === "number"){

    return(<>
    
                 {props.item.quantity < props.stock && <span><button onClick={() => props.handleAdd(props.item)}>+</button></span>}
                 <span>{props.item.quantity}</span>
                {props.item.quantity > 1 && <span><button onClick={() => props.handleDec(props.item)}>-</button></span>}

    </>)}




}