export default function TransaksiButton(props){






   return ( <div className="w-100 p-4 mt-2 d-flex justify-content-center">
                            

                    {props.onTransaksiPage === false ? 


                    <button className="btn btn-outline-primary w-75 p-3" value={"transaksiPage"} onClick={props.handleTransaksi}>Transaksi</button>
                    
                    :

                    <button className="btn btn-outline-primary w-75 p-3" onClick={props.handleBackTransaksi}>Kembali</button>
                    }


        </div>)


}