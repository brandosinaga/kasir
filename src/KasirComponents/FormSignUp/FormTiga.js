import { Form } from "react-bootstrap"
export default function FormTiga(props){

    return(<section className="signup-3 slide w-100">

            <div className="mb-4">
                    <h1>Keamanan Untuk Akun Anda</h1>
            </div>


            <div>

                    <Form.Group>
                        <Form.Control className="text-center text-secondary mb-4"  value={props.inputedPassword} onChange={props.handleChangePassword} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control className="text-center mb-4 text-secondary" placeholder="Verifikasi Password" disabled = {!props.isPassword} onChange={props.handleVerificationPasword} />
                    </Form.Group>

            </div>

          

            <div className="w-100"> 
                <button className="btn btn-outline-success w-50" onClick={() => props.handleSubmit(document.querySelector(".signup-3"))} disabled = {!props.isSubmit}>Submit</button>
            </div>

</section>)
}