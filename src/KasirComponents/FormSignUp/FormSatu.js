import { Form } from "react-bootstrap"


export default function FormSatu(props){





    return ( <section className="signup-1 slide w-100">

                <div className="mb-4">

                    <h1>Data Toko</h1>
                    
                </div>
                 


               <div className="mb-4">
                        <Form.Group>
                            <Form.Control className="text-center text-secondary mb-4" placeholder="Masukkan Nama Toko" value={props.namaToko} onChange={props.handleChangeNamaToko} disabled = {props.state === "submitting"} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control className="text-center text-secondary mb-4" placeholder="Masukkan Kota" value={props.kota} onChange={props.handleChangeKota} disabled = {props.state === "submitting"} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Control className="text-center text-secondary" placeholder="Masukkan email" value={props.email} onChange={props.handleChangeEmail} disabled = {props.state === "submitting"} />
                        </Form.Group>

               </div>


                <div>

                    <p className="text-danger">{props.error !== null && props.error.message}</p>

                </div>


                <div className="w-100">

                        <button className="btn btn-outline-success w-50" onClick={() => props.nextToFormProduct(document.querySelector(".signup-1"))} disabled = {props.state === "submitting"}>Lanjut</button>
                    
                </div>


            </section>)
}