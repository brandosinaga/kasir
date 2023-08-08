import { useState } from "react";





export default function useEditProduct(selectedProduct, dispatch, destination){

    

// states

const [editName, setEditName] = useState(selectedProduct.name)
const [editHarga, setEditHarga] = useState(selectedProduct.price)
const [editImage, setEditImage] = useState(selectedProduct.image);
const [editStock, setEditStock] = useState(typeof selectedProduct.stock === "boolean" ? false : true)
const [editJumlahStok, setJumlahStok] = useState(typeof selectedProduct.stock === "number" ? selectedProduct.stock : 0);



// functions

const handleChangeEditName = (e) => {
   
   setEditName(e.target.value)



}
const handleChageEditHarga = (e) => setEditHarga(e.target.value)
const handleChangeEditImage = (e) => {

                    const value = e.target.files[0];
                    const reader = new FileReader();

        reader.addEventListener("load", () => {

                setEditImage(reader.result)

        })

        reader.readAsDataURL(value)


}
const handleChangeStock = (e) => setEditStock(JSON.parse(e.target.value))
const handleChangeJumlahStok = (e) => setJumlahStok(e.target.value)

const handleSubmit = () => {
    



    const obj = {
               id : selectedProduct.id,
               name : editName,
               image : editImage,
               price : isNaN(parseInt(editHarga)) ? selectedProduct.price : parseInt(editHarga),
                stock : editStock === true ? (isNaN(parseInt(editJumlahStok)) ? selectedProduct.stock : parseInt(editJumlahStok)) : editStock,
                
    }


   

    const checkName = obj.name.toLowerCase() !== selectedProduct.name.toLowerCase();

    const checkPrice = obj.price !== selectedProduct.price;

    const checkImage = obj.image !== selectedProduct.image;

    const checkStock = obj.stock !== selectedProduct.stock;


   

    if(checkName || checkPrice || checkImage || checkStock ){

       dispatch({type : "editProduk", data : {...obj}, destination})


    } else {

       console.log("tidak ada data berubah")
      
    }




}




return {
            editName,

            editHarga,

            editImage,

            editStock,

            editJumlahStok,

            handleChangeStock,

            handleChangeJumlahStok,

            handleChangeEditImage,

            handleChageEditHarga,

            handleChangeEditName,

            handleSubmit,
}




}