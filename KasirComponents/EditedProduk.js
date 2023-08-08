import { Form } from "react-bootstrap"

export default function EditedProduk(props){



    const {countCart,name, countQuantity, totalPerProduct, harga} = props.editedCart;

               
    return(<>

                    <span><h1>{name}</h1></span>
                    <span><h1>harga : Rp.{harga},-</h1></span>
                    <span><h3>Quantity</h3></span>
                    <span><h1>{props.editedQuantity}</h1></span>
                    <span>

                                <button className="btn btn-outline-primary" onClick={props.handleAddEditedQuantity}>+</button>

                                {props.editedQuantity > 1 && <button className="btn btn-outline-primary" onClick={props.handleDecEditedQuantity}>-</button>}

                    </span>
                    <span>
                                {props.editedQuantity !== countQuantity && <button className="btn btn-outline-primary" onClick={() => props.handleUbah(name)} >Ubah</button>}
                    </span>
                    <span><button onClick={props.handleHidePortal}>kembali</button></span>
    
    </>)

   

}