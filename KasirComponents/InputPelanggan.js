import { Form } from "react-bootstrap"
import PelangganList from "./PelangganList"

export default function InputPelanggan(props){


  


    return (<section className="w-75 p-1">

                <span className="text-center">
                    <h5>Masukkan Nama Pelanggan</h5>
                </span>

            <span>
                    
                    <Form>
                        <Form.Group>
                            <Form.Control className="border border-4 p-2 text-center fw-bold class"  onChange={props.handleChangeNamaPelanggan} value={props.namaPelanggan} disabled = {props.disabledBtn} />
                        </Form.Group>
                    </Form>
                    
            </span>


            <span>

                            <PelangganList chooseNamaPelangganFromList = {props.chooseNamaPelangganFromList}  listPelangganFounded = {props.listPelangganFounded} />

            </span>

    </section>)

}