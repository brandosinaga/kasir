export default function Invoice(props){


    return(<section className="w-50 mb-3 row">

                            <span className="border border-4 p-4 text-center rounded  col-8"><h3>Invoice</h3></span>
                            <span className="border border-4 col-4 p-4 text-center rounded bg-secondary text-light"><h3>T-{props.countTransaksi}</h3></span> 
                        
            </section>)


}