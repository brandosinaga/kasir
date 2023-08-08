import { createPortal } from "react-dom";
import Invoice from "../KasirComponents/InvoicePage";
import InputPelanggan from "./InputPelanggan";
import Portal from "./Portal";
import TableCarts from "./TableCarts";
import TotalTransaksi from "./TotalTransaksi";



export default function TransaksiPage(props){


      
    return(<>

                <Invoice countTransaksi = {props.countTransaksi}  />


                <InputPelanggan {...props} />
          


                {props.namaPelanggan !== "" && (<section className="p-3 w-100 d-flex justify-content-center mb-4 mt-4">
                                                        <button className="btn btn-secondary w-50 p-2 fw-bold class" onClick={props.handleShowPortal}>list Cart</button>
                                                </section>)
                        }
                
    
                

                <TableCarts charts = {props.charts} handleEditProductInCart = {props.handleEditProductInCart} />



                <TotalTransaksi total = {props.total}  />


                {props.showPortal === true && createPortal(<Portal {...props} />, document.querySelector(".content-container"))}</>)

}