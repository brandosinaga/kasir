import { useState } from "react";

export default function useProductPageUI(dataReduce, loginAuthentification){


    // UI states

const [pageState, setPageState] = useState(false);
const [page, setPage] = useState('');
const [namaProduk, setNamaProduk] = useState('');
const [harga, setHarga] = useState(0);
const [image, setImage] = useState('');
const [stock, setStock] = useState(false);
const [jumlahStok, setJumlahStok] = useState(1);
const [isDataCompleted, setDataCompleted] = useState(null) 
const [selectedProduct, setSelectedProduct] = useState({});








const handleStatePages = ()  => setPageState(!pageState);


const handleTambahProduk = () => {

                         setPage('tambahProduk');

                        setPageState(!pageState);

}

// *********************************************************************

const handleEditProduk = (selectedProduct) => {

                          setPage('editProduk');

                          setPageState(!pageState);

                        //   console.log(selectedProduct)


                          setSelectedProduct(selectedProduct);

}




// *********************************************************************

const handleChangeNamaProduk = (e) => setNamaProduk(e.target.value);
const handleChangeHarga = (e) => setHarga(e.target.value)
const handleChangeStock = (e) => setStock(JSON.parse(e.target.value))
const handleJumlahStok = (e) => setJumlahStok(e.target.value)
const handleChangeImage = (e) => {

            const value = e.target.files[0];
            const reader = new FileReader();

        reader.addEventListener("load", () => {

                setImage(reader.result)

        })

        reader.readAsDataURL(value)


}


const handleSubmit  = () => {

            const obj = {
                            name : namaProduk,
                            price : parseInt(harga),
                            image,
                            stock : (stock === true ? parseInt(jumlahStok) : stock)

            }
            


          if((obj.name !== "") && (!isNaN(obj.price)) && (obj.image !== '') && (!isNaN(jumlahStok))){

            
            dataReduce.dispatch({type : "tambahProduk", data : obj, destination : loginAuthentification.dataEnter.id_user})


                    setDataCompleted(true);
                    setPageState(!pageState)


          } else {

            
                    setDataCompleted(false)
          }

        
              

            

            setNamaProduk('')
            setHarga(0);
            setImage('');
            setStock(false);
            setJumlahStok(1);

}




const handleChangeStockAfterEdit = (e) =>console.log(e.target.value);

const handleHapusProduct = (item) => {

  dataReduce.dispatch({type : "deleteProduct", data : {...item}, destination : loginAuthentification.dataEnter.id_user})
}


return{
    
                        pageState, 
                        page, 
                        namaProduk,
                        harga, 
                        image, 
                        stock, 
                        jumlahStok,     
                        isDataCompleted, 
                        selectedProduct, 
                        handleStatePages, 
                        handleTambahProduk,
                        handleEditProduk, 
                        handleChangeNamaProduk, 
                        handleChangeHarga, 
                        handleChangeStock, 
                        handleJumlahStok, 
                        handleChangeImage,
                        handleSubmit,
                       handleChangeStockAfterEdit,
                       handleHapusProduct
    
}



}