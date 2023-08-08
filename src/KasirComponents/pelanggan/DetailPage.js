import { Form } from "react-bootstrap";

export default function DetailPage(props){


    return (<>

                <Form className="border border-1 rounded p-2 text-secondary w-75">
                        <Form.Group>
                            <Form.Label>Nama Pelanggan</Form.Label>
                            <Form.Control className="text-center" placeholder={props.editedName} onChange={props.handleChangeNamaPelanggan} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Kota</Form.Label>
                            <Form.Control className="text-center" placeholder={props.editedKota} onChange={props.handleChangeKotaPelanggan}  />
                        </Form.Group>
                </Form>


                <div className="w-100 p-2 d-flex justify-content-around">
                        <button className="btn btn-outline-success" onClick={props.handleBack}>back</button>
                        <button className="btn btn-outline-success" onClick={props.handleSubmit}>submit</button>
                        <button className="btn btn-outline-success" onClick={props.handleHapus}>hapus pelanggan</button>
                </div>
                
        </>)
}