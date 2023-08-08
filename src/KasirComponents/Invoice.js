export default function Invoice(props){



    return(<div className="w-50 mb-3 row">

                            <span className="col-6 border border-1 d-flex justify-content-center"><h3>Invoice</h3></span>
                            <span className="col-6 border border-4 d-flex justify-content-center bg-secondary text-light"><h3>TR-0-{props.countTransaksi}</h3></span> 
                        
            </div>)


}