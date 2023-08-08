import { Link } from "react-router-dom";


export default function SuccessSignUp(props){




    return( <section className="success slide  w-100">

                    <h1>Selamat {props.nama}, Pendaftaran Berhasil !</h1>
                    <h1>Id : {props.id}</h1>
                    <h1>Password : {props.password}</h1>
                     <Link to={"/login"}><h1>Login Disini</h1></Link>

            </section>)
}