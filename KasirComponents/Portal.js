import { useMemo } from "react";
import { Form } from "react-bootstrap";
import InputProdukToCart from "./InputProdukToCart";
import EditedProduk from "./EditedProduk";



export default function Portal(props){





 

            return(<span className="portalToAddingCart p-4">

                        {props.btnName === "list-cart" ? <InputProdukToCart {...props}  /> : <EditedProduk editedCart = {props.editedCart} editedQuantity = {props.editedQuantity} handleHidePortal = {props.handleHidePortal} handleAddEditedQuantity = {props.handleAddEditedQuantity} handleDecEditedQuantity ={props.handleDecEditedQuantity} handleUbah  = {props.handleUbah } />}

             </span>)
             
            
            
            }
      

