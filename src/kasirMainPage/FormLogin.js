
import { Form } from "react-bootstrap";


function FormLogin(props){
     



    return (<>

                <Form className="border border-1 rounded p-4 w-75" onSubmit={props.handleSubmit}>
                
                        <Form.Group className="p-1">
                                <Form.Label><h3>User ID</h3></Form.Label>
                                <Form.Control type="text" name='id_user'  />
                        </Form.Group>



                        <Form.Group className="p-1 mt-4 mb-4">
                                <Form.Label><h3>Password</h3></Form.Label>
                                <Form.Control type="password" name='password' />
                        </Form.Group>


                        {props.dataEnter === undefined && <Form.Group className="text-center text-danger"><p>Akun tidak ditemukan, Masukkan Data yang Benar</p></Form.Group>}


                        <Form.Group className="p-1 mt-4 mb-4 d-flex justify-content-center">
                                <button className="btn btn-outline-success p-2 w-50" type='submit' >Login</button>
                        </Form.Group>

                </Form>
        </>
)


}



export default FormLogin;