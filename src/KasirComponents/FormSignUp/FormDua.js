import { Form } from "react-bootstrap"

export default function FormDua(props){


   
    return ( <section className="signup-2 slide w-100">

                <div className="mb-3">
                    <h1>Data Produk</h1>
                </div>
                 
               <div className="mb-4">

                        <Form.Group>
                            <Form.Label className="text-secondary">Masukkan Nama Produk</Form.Label>
                            <Form.Control className="text-center text-secondary mb-4"  value={props.namaProduk} onChange={props.handleChangeNamaProduk} disabled = {props.state === "submitting"} />
                        </Form.Group>

                        <Form.Group>
                        <Form.Label className="text-secondary">Harga per Item</Form.Label>
                            <Form.Control className="text-center text-secondary mb-4" value={props.harga} onChange={props.handleChangeHarga} disabled = {props.state === "submitting"} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <span><img src={props.gambar} className="mb-2 border border-1 rounded" style={{width : "50px", height : "50px"}} alt="" /></span>
                            <Form.Label className="m-1 text-secondary">Pilih Gambar</Form.Label>
                            <Form.Control type="file" className="text-secondary" placeholder="Masukkan email" onChange={props.handleChangeGambar} disabled = {props.state === "submitting"} />
                        </Form.Group>

                      
                        <Form.Group>
                            <Form.Label className="text-secondary">Atur Stock</Form.Label>
                            <Form.Control className="text-center text-secondary" value={props.stok === false ? 0 : props.stok} onChange={props.handleChangeStok} disabled = {props.state === "submitting"} />
                            <p className="text-danger" style={{fontSize : "10px"}}>isi dengan angka untuk mengatur produk yang tersedia, tidak mengisi berarti stock tidak terbatas</p>
                        </Form.Group>
               </div>

                <div>

                    <p className="text-danger">{props.error !== null && props.error.message}</p>

                </div>

                <div className="w-100">

                        <button className="btn btn-outline-success w-50" onClick={props.handleTambahProduk} disabled = {props.state === "submitting"}>Tambah Produk</button>
                        {props.products.length > 0 && <button className="btn btn-outline-success w-50" onClick={() => props.handleHideElement(document.querySelector(".signup-2"))} disabled = {props.state === "submitting"}>Lanjut</button>}
                    
                </div>


            </section>)
}