import { Form } from "react-bootstrap";


export default function InputPelanggan(props){

      
       

    return(<div className="w-100">
                    <span className="d-flex justify-content-center"><Form.Control className="w-75 text-center border border-4" placeholder="Masukkan Nama Pelanggan" value={props.transaksi.namaPelanggan} onChange={props.transaksi.handleChangeNamaPelanggan}/></span>
                    <ul className="w-100 d-flex flex-column justify-content-center align-items-center" style={{listStyle : "none"}}>
                        {props.loginAuthentification.dataEnter.pelanggan.filter(item => item.nama.toLowerCase().includes(props.transaksi.namaPelanggan.toLowerCase()) && props.transaksi.namaPelanggan !== '').map(item => <li key={item.id} className="w-75 d-flex justify-content-center"><button className="btn btn-outline-primary w-75" onClick={() => props.transaksi.handleMakeThisNamaPelanggan(item.nama)}>{item.nama}</button></li>)}
                    </ul>
    </div>)
}