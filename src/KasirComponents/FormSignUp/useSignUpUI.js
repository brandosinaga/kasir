import { useEffect, useState } from "react";
import PasswordValidator from "password-validator";

export default function useSignUpUI(countID, dispatch){



// states

const [elementHide, setElementHide] = useState(null);
const [state, setState] = useState("typing");
const [error, setError] = useState(null);
const [products, setProducts] = useState([]);
const [account, setAccount] = useState({});


const [namaToko, setNamaToko] = useState('');
const [kota, setKota] = useState('');
const [email, setEmail] = useState('');

const [namaProduk, setNamaProduk] = useState('');
const [harga, setHarga] = useState(0);
const [gambar, setGambar] = useState('');
const [stok, setStok] = useState(false);

const [inputedPassword, setInputedPassword] = useState("");
const [password, setPassword] = useState("");
const [isPassword, setIsPassword] = useState(null);
const [isSubmit, setIsSubmit] = useState(false);




// functions

const handleHideElement = (elem) => setElementHide(elem);

const handleChangeNamaToko = (e) => setNamaToko(e.target.value);

const handleChangeKota = (e) => setKota(e.target.value);

const handleChangeEmail = (e) => setEmail(e.target.value);

const nextToFormProduct = async (elem) => {

      
       const dataInputValidation = (namaToko !== "") && (kota !== "") && (email !== "");


       setState("submitting");


        try {

                    await isAllDataInputValid(dataInputValidation)

                    setElementHide(elem)

                    setState("typing");

                    setError(null)

                    

        } catch(err){

                    setError(err);

                    setState("typing");
        }

}
                           




const handleChangeNamaProduk = (e) => setNamaProduk(e.target.value);



const handleChangeHarga = (e) => setHarga(e.target.value)



const handleChangeGambar = (e) => {

            const filereader = new FileReader();

            filereader.addEventListener("load",() => setGambar(filereader.result))

            filereader.readAsDataURL(e.target.files[0]);
}




const handleChangeStok = (e) => setStok(e.target.value);



const handleTambahProduk = async () => {

      
    const checkNamaProductValidation = namaProduk !== "";
    const checkHarga = (!isNaN(parseInt(harga)) ? parseInt(harga) : 0);
    const checkHargaValidation = checkHarga > 0;
    
    const dataInputValidation = checkNamaProductValidation && checkHargaValidation

    const obj = {
                        id : products.length,
                        name : namaProduk,
                        price : parseInt(harga),
                        image : gambar,
                        stock : (!isNaN(parseInt(stok))) && (parseInt(stok) > 0) ? parseInt(stok) : false
    }

    
    setState("submitting");

    try {

        await isAllDataInputValid(dataInputValidation)

                        setProducts([...products, {...obj}])
                        setNamaProduk("");
                        setHarga(0)
                        setGambar('');
                        setStok(false)
                        setState("typing")

        

            } catch(err){

                        setError(err);
                        setNamaProduk("");
                        setHarga(0)
                        setGambar('');
                        setStok(false)
                        setState("typing")
        
            }



}




const handleChangePassword = (e) => setInputedPassword(e.target.value);

const handleVerificationPasword = (e) => {

        const isVerificationPassword = password.toLowerCase() === e.target.value.toLowerCase();

        setIsSubmit(isVerificationPassword);
}


const handleSubmit = (elem) => {

            setElementHide(elem)

            const obj = {

                            id_user :  `Toko-0-${countID+1}`,
                            nama_user : namaToko,
                            password : password,
                            city : kota,
                            email : email,
                            products : products,
                            transaksi : [],
                            income : 0,
                            pelanggan : []


            }

            setAccount({...obj})
            dispatch({type : "tambahToko", data : {...obj}})

            
}



useEffect(() => {

            const elem1 = document.querySelector(".signup-1")
            const elem2 = document.querySelector(".signup-2")
            const elem3 = document.querySelector(".signup-3")
            const success = document.querySelector(".success")


                if(elementHide === elem1){
                    elementHide.style.display = "none"
                    elem2.style.transform = "translateX(0)"
                    elem2.style.opacity = "1"   
                 
                } 



                if(elementHide === elem2){
                    elementHide.style.display = "none"
                    elem3.style.transform = "translateX(0)"
                    elem3.style.opacity = "1"  
                     
                }


                if(elementHide === elem3){
                    elementHide.style.display = "none"
                    success.style.transform = "translateX(0)"
                    success.style.opacity = "1" 
                            
                }
    

                
},[elementHide])



useEffect(() => {

                const schema = new PasswordValidator();

                schema.is().min(8).is().max(100).has().uppercase().has().lowercase().has().digits(2).has().not().spaces().is().not().oneOf(['Passw0rd', 'Password123']); 

                const value = schema.validate(inputedPassword)

                if(value){

                    setPassword(inputedPassword);

                    setIsPassword(value);

                    
                }




},[inputedPassword, password, isPassword])



return {

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
                


}
}










function isAllDataInputValid(value){


    return new Promise((resolved, rejected) => {

                    setTimeout(() => {
                        
                            if(!value){

                                rejected(new Error("Data belum valid !"))

                            } else {

                                resolved()
                            }

                    }, 1500);

    })

}