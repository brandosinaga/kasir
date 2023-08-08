import FormLogin from "../kasirMainPage/FormLogin";
import LoginSuccess from "../kasirMainPage/LoginSuccess";
import { Link } from "react-router-dom";




function KasirPage(props){


        return(<>

                               
                        {props.loginAuthentification.isLogin === true ? 
                        
                                        (<div className="login-succes">
                                        
                                                <LoginSuccess {...props}  />
                                        
                                        </div>)

                                        :
                                         
                                        (<div className="d-flex text-secondary flex-column justify-content-around align-items-center" style={{height : "100vh"}}>

                                                <FormLogin handleSubmit = {props.loginAuthentification.handleDataEnter } dataEnter = {props.loginAuthentification.dataEnter} />
                                                <Link to={"/daftar"} style={{textDecoration : "none"}}><h4 className="text-secondary">Daftar Disini</h4></Link>
                                        </div>)}

                                        
                                        

                 </>)


}










export default KasirPage;   