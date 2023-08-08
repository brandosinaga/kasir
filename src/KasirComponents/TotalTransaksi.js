export default function TotalTransaksi(props){


   
    
    return(<div className="w-50 mb-3 row">

                            <span className="col-6 border border-1 d-flex justify-content-center"><h3>Total Bayar</h3></span>
                            <span className="col-6 border border-4 d-flex justify-content-center bg-secondary text-light"><h3>Rp.{props.total.toLocaleString("id-ID")},-</h3></span> 
                           
                        
            </div>)


}