import { Form } from "react-bootstrap";

export default function TambahProduk(props){

    

    return(<>
    
    <Form className="border border-4 p-4 w-75 text-secondary">

                <Form.Group>
                    <Form.Label>Nama Produk</Form.Label>
                    <Form.Control value={props.namaProduk} onChange={props.handleChangeNamaProduk} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Harga per item</Form.Label>
                    <Form.Control value={props.harga} onChange={props.handleChangeHarga} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Gambar</Form.Label>
                    <Form.Control type="file"  onChange={props.handleChangeImage}/>
                </Form.Group>

                <Form.Group className="mt-3">
                    
                     <Form.Select aria-label="Default select example" value={props.stock} className="text-secondary text-center" onChange={props.handleChangeStock}>
                        <option value={false}>stok tidak diatur</option>
                        <option value={true}>Atur Stok</option>
                    </Form.Select>
                   
                </Form.Group>

              
                {props.stock === true && (

                    <Form.Group className="mt-4">
                        <Form.Control placeholder="masukkan Jumlah Stok" className="text-center border border-4 rounded" value={props.jumlahStok} onChange={props.handleJumlahStok} />
                    </Form.Group>
                )}



    </Form>

        {props.isDataCompleted === false && <span className="mt-2 w-75 d-flex justify-content-center align-items-center text-danger"><p>data masih kosong</p></span>}

        <span className="mt-4 w-50"><button className="w-100 btn btn-warning" onClick={props.handleSubmit}>Submit</button></span>
    
    </>)
}