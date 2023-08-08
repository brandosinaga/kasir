import useSignUpUI from "../KasirComponents/FormSignUp/useSignUpUI"
import FormSatu from "../KasirComponents/FormSignUp/FormSatu"
import FormDua from "../KasirComponents/FormSignUp/FormDua"
import FormTiga from "../KasirComponents/FormSignUp/FormTiga"
import SuccessSignUp from "../KasirComponents/FormSignUp/SuccessSignUp"
import { Link } from "react-router-dom";


export default function FormSignUp(props){

       

   const {



                                account,
                                error,
                                state,
                                products,
                                namaToko, 
                                kota,
                                email,
                                namaProduk,
                                harga,
                                gambar,
                                stok,
                                inputedPassword,
                                isPassword,
                                isSubmit,
                                handleHideElement,
                                nextToFormProduct,
                                handleChangeNamaToko,
                                handleChangeKota,
                                handleChangeEmail,
                                handleChangeNamaProduk,
                                handleChangeHarga,
                                handleChangeGambar,
                                handleChangeStok,
                                handleTambahProduk,
                                handleChangePassword,
                                handleVerificationPasword,
                                handleSubmit
                    
                   




   } = useSignUpUI(props.dataReduce.allDataToko.length, props.dataReduce.dispatch);






   const formSatuProps = {

                                
                                state,
                                error,
                                namaToko, 
                                kota,
                                email,
                                nextToFormProduct,
                                handleChangeNamaToko,
                                handleChangeKota,
                                handleChangeEmail

   }






   const formDuaProps = {
                                state,
                                error,
                                products,
                                namaProduk,
                                harga,
                                gambar,
                                stok,
                                handleChangeNamaProduk,
                                handleChangeHarga,
                                handleHideElement,
                                handleChangeGambar,
                                handleChangeStok,
                                handleTambahProduk
                                
   }


 


   const formTigaProps = {

                                inputedPassword,
                                isPassword,
                                isSubmit,
                                handleHideElement,
                                handleSubmit,
                                handleChangePassword,
                                handleVerificationPasword
   }


   const successSignUpProps = {
                                nama : account.nama_user,
                                id : account.id_user,
                                password : account.password,
                                handleHideElement
   }


   
  return(<div className="text-center w-100 d-flex flex-column justify-content-center align-items-center" style={{height : "100vh"}}>

                <div className="w-100 d-flex justify-content-end" style={{marginTop : "10vh"}}>
                        <span className="w-50 d-flex justify-content-end align-items-center text-secondary" style={{marginRight : "30px"}}>
                        <Link to={"/login"} style={{textDecoration : "none", fontWeight : "600"}}><h4>keluar</h4></Link>
                        </span>
                </div>
                <div className="w-75 p-2" style={{height : "100vh"}}>


                           <FormSatu {...formSatuProps} />

                            <FormDua {...formDuaProps} />

                            <FormTiga {...formTigaProps} />

                            <SuccessSignUp {...successSignUpProps} />

                        
                </div>
        </div>)

    
}