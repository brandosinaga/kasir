export default function TotalTransaksi(props){

    return(<section className="w-100 row">

    <span className="border border-4 p-3 rounded col-2 d-flex justify-content-center"><h3>Total</h3></span>
    <span className="border border-4 col-7 p-4 text-center rounded bg-secondary text-light"><h5>Rp.{props.total},-</h5></span> 
    {props.total > 0 && <span className="col-3"><button className="w-100 btn btn-outline-primary" style={{height : "100%"}}>Bayar</button></span>}
        </section>)

}