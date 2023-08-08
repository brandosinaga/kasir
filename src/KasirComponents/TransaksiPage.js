import { useState } from "react";
import InputPelanggan from "./InputPelanggan";
import Invoice from "./Invoice";
import TableCarts from "./TableCarts";
import TotalTransaksi from "./TotalTransaksi";
import InputProductsToCart from "./InputProductsToCart";




export default function TransaksiPage(props){




    const [showAdditionalPage, setShowAdditionalPage] = useState(false);

    const handleAdditionalPage = () => setShowAdditionalPage(!showAdditionalPage);

 








    if(showAdditionalPage === true){

        return (<InputProductsToCart {...props} handleAdditionalPage = {handleAdditionalPage}/>)
    }






    return (<>


                    <Invoice countTransaksi = {props.transaksi.countTransaksi} />

                    <InputPelanggan {...props}  />

                    {props.transaksi.namaPelanggan !== "" &&

                    (<><button className="btn btn-outline-warning" onClick={handleAdditionalPage}>Tambah Cart</button>

                    <TableCarts {...props} /></>)}

                    {props.transaksi.cart.length > 0 && <TotalTransaksi total = {props.transaksi.total}  />}

                    
                    
                    
    </>)


}