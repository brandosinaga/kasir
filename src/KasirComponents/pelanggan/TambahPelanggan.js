import { Form } from "react-bootstrap";

export default function TambahPelanggan(props){




    return(<>
                
                <Form className="border border-1 rounded p-2 text-secondary w-75">
                        <Form.Group>
                            <Form.Label>Nama Pelanggan</Form.Label>
                            <Form.Control className="text-center" value={props.editedName} onChange={props.handleChangeNamaPelanggan} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Kota</Form.Label>
                            <Form.Control className="text-center" value={props.editedKota} onChange={props.handleChangeKotaPelanggan} />
                        </Form.Group>
                </Form>



               <div className="p-1 w-100 d-flex justify-content-center">
                    <button className="btn btn-outline-success" onClick={props.handleBack}>back</button>
                    <button className="btn btn-outline-success" onClick={props.handleTambahPelanggan}>Tambah</button>
               </div>
    </>)
}