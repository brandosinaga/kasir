import { useEffect, useReducer, useState } from "react";
import { dataToko, reducer } from './DataToReduce'




export default function useData(){



        
    // states for App

    const [allDataToko, dispatch] = useReducer(reducer, dataToko);


    const [countToko, setCountToko] = useState(2);
    

    const [countProduk, setCountProduk] = useState(1);

    
    const [countTransaksi, setCountTransaksi] = useState(0);




    // states for FormLogin

    const [account, setAccount] = useState (undefined); 
    // state berubah menjadi object bukan array 


    

    const [isInputData, setInputData] = useState(null);


    const [isLogin, setIslogin] = useState(false);
    
    

 

    // 888888888888888888888888888888
    const [namaPelanggan, setNamaPelanggan] = useState('');

    const [listPelangganFounded, setListPelangganFounded] = useState([]);

   

// form login

    const [kelolaPage, setKelolaPage] = useState("mainPage");


    const [state, setState] = useState(false);


    const [onTransaksiPage, setOnTransaksiPage] = useState(false);




//     form login functions

    const handleKelolaPage = (e) => {
        
                            setKelolaPage(e.target.value);

                            setState(true);
                        
                           
    }



    const handleBack = () => setState(false);




   const handleTransaksi = (e) => {

                setOnTransaksiPage(!onTransaksiPage)

                setKelolaPage(e.target.value);

                setState(true);

   }



   

   const handleBackTransaksi = () => {

                setState(false);

                setOnTransaksiPage(!onTransaksiPage)

   }





   const [editedItemPage, setEditedItemPage] = useState(false);

   const [editedItem, setEditedItem] = useState({});



   const handleEditedItem = (item) => {
        
        setEditedItem(item)

            setEditedItemPage(!editedItemPage)

}

 



    
        // states 
        const [countCart, setCountCart] = useState(1);
        const [charts, setCharts] = useState([]);
        const [namaProduct, setNamaProduct] = useState('');
        const [harga, setHarga] = useState(0);
        const [countQuantity, setCountQuantity] = useState(1);
        const [totalPerProduct, setTotalPerProduct] = useState(0);
        const [total, setTotal] = useState(0);
        const [showPortal, setShowPortal] = useState(false);
        const [temporaryProductsData, setTemporaryProductsData] = useState([])
        const [temporaryProductPrice, setTemporaryProductPrice] = useState(0)
        const [btnName, setBtnName] = useState('');
        const [editedCart, setEditedCart] = useState({});
        const [editedQuantity, setEditedQuantity] = useState(1);
        const [disabledBtn, setDisabledBtn] = useState(false);
        const [stock, setStock] = useState(0);

















      // functions for App

      const handleAddCountToko = () => setCountToko(countToko + 1);

      const handleAddCountproduk = () => setCountProduk(countProduk + 1)

      const handleAddCountTransaksi = () => setCountTransaksi(countTransaksi + 1);


      const handleLogin = (e) => {

          e.preventDefault();

          const formData = new FormData(e.target);

          const dataLogin = {...Object.fromEntries(formData)};

          const findDataLoginInDatabase = allDataToko.reduce((a, e, i) => {

              const {id_user, password} = e;

                if(id_user === dataLogin.id_user && password === dataLogin.password){

                          a.push(e);
                      
                          return a;
        
                          } 
                              
                          
                          return a;                               
        },[])


        

        const state = findDataLoginInDatabase.length > 0
    

        setInputData(state);


        setAccount(findDataLoginInDatabase[0]);



        setIslogin(state);


    }


    

    const handleLogout = () => setIslogin(false);  










 





// 888888888888888888888888888888888888888888888



const handleChangeNamaPelanggan = (e) => {
  
         const inputValue = e.target.value;

         setNamaPelanggan(inputValue);
         
         const result = account.pelanggan.filter(item => (item.nama.toLowerCase().includes(inputValue.toLowerCase())) && inputValue !== "");

         setListPelangganFounded([...result])
   

}


const chooseNamaPelangganFromList = (e) => {
  
            setNamaPelanggan(e.target.value);

            setListPelangganFounded([]);

}

 const filteredNamaPelanggan = (pelanggan) =>  {

            const result = pelanggan.filter(item => (item.nama.toLowerCase().includes(namaPelanggan.toLowerCase())) && namaPelanggan !== "");

            setListPelangganFounded([...result]);
            
    }



    
        // functions

       
       
        const handleHidePortal = () => setShowPortal(!showPortal);

        const handleShowPortal = () => {
                
                setShowPortal(!showPortal);

              
                const result = charts.reduce((a, e) => {


                        const filteredProduk = a.filter(item => item.name !== e.name);

                        return [...filteredProduk]

                },account.products)


                setTemporaryProductsData(result)

                setBtnName("list-cart")

                setDisabledBtn(true)
        
        }




        const handleNamaProduct = (e) => {

                        const inputValue = e.target.value;

                        const checkInputToListProducts = account.products.some(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))

                        const selectedProduct = account.products.find(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))

                        if(checkInputToListProducts && selectedProduct){

                                setNamaProduct(inputValue);
                                
                                setTemporaryProductPrice(selectedProduct.price);

                                setHarga(selectedProduct.price);

                        } else {

                                setNamaProduct('');
                                setTemporaryProductPrice(0);

                        }
                        
                        setCountQuantity(1);
        }





        const addCountQuantity = () => setCountQuantity(countQuantity + 1);

        const decCountQuantity = () => setCountQuantity(countQuantity - 1);




        const handleToCarts = () => {

                if(namaProduct !== "" && countQuantity !== 0 && totalPerProduct !== 0){

                        setCharts([...charts, {countCart,name : namaProduct, countQuantity, totalPerProduct, harga}]);

                        setNamaProduct('');
                }


                setShowPortal(!showPortal);
                setNamaProduct("");
                setTemporaryProductPrice(0);
                setCountQuantity(0);
                setCountCart(countCart + 1);
               
        }




        const handleEditProductInCart = (item) => {

                        setBtnName('edit-produk');
                        setEditedCart(item)
                        setShowPortal(!showPortal)
                        

        
        }


        const handleAddEditedQuantity = () => setEditedQuantity(editedQuantity + 1);
        const handleDecEditedQuantity = () => setEditedQuantity(editedQuantity -1);


        const handleUbah = (name) => {


                const filteredToBeEdited = charts.reduce((a,e,i) => {
                
                
                                if(e.name.toLowerCase() === name.toLowerCase()){

                                        e.countQuantity = editedQuantity;
                                        e.totalPerProduct = e.harga * editedQuantity;

                                        return [...a, e]


                                }


                                return [...a, e]

                },[])

                setCharts(filteredToBeEdited);

        }

        

        useEffect(() => {

                setTotalPerProduct(prevTotalperProduk => countQuantity * temporaryProductPrice);
               
                        const totalAllinCarts = charts.reduce((a,e) => a + e.totalPerProduct , 0);

                        setTotal(totalAllinCarts)
              

        },[countQuantity, temporaryProductPrice, total, charts])




        useEffect(() => {

                       
          
                  if(account){
          
                    setCountTransaksi(account.transaksi.length + 1)

                    account.products.forEach(item => {
                        
                        if(item.name === namaProduct){

                              setStock(item.stock)
                        }
                    });


                  }
          
              },[account, namaProduct, stock])




        useEffect(() => {


                        if(countQuantity > stock){

                                setCountQuantity(1);
                        }

        }, [countQuantity, stock])







        const [name, setName] = useState('');
        const [price, setPrice] = useState('');
        const [image, setImage] = useState('');
        const [editedStock, setEditedStock] = useState('');
        const [aturStock, setAturStock] = useState(false);
        const [stockUnlimited, setStockUnlimited] = useState(false);


       

        // functions

        const handleAturStock = () => {

                setAturStock(true);

                setStockUnlimited(false);

                
}


const handleUnlimitedStock = () => {

                setStockUnlimited(true);
                setAturStock(false);
                setEditedStock(false)
}


const handleChangeStock = (e) => setEditedStock(e.target.value); 

const handleChangeName = (e) => setName(e.target.value);

const handleChangePrice = (e) => setPrice(e.target.value)

const handleChangeImage = (e) => {

            const data = e.target.files[0];
            
            const reader = new FileReader();

            reader.addEventListener("load", () => {

               setImage(reader.result)

            })

            reader.readAsDataURL(data)

}



const handleEditedUbah =() => {

    const data = {

                        name : (name ===  "" ? editedItem.name : name),
                        price :  (price ===  "" ? editedItem.price : price),
                        image : (image === "" ? editedItem.image : image), 
                       stock : (editedStock === "" ? editedItem.stock : (typeof editedStock === "boolean" ? false : Number(editedStock)))

                        
    }

    const destination = {id_user : account.id_user, nama_produk : editedItem.name};

    dispatch({type : "edit-produk", destination, data})

   
}



const handleEnterStock = (e) => setEditedStock(e.target.value)














    

    return {
                        dataReducer : {allDataToko, dispatch},
                        login : {isLogin, isInputData, handleLogin, account},
                        logout : {handleLogout},
                        contentContainer: {state, kelolaPage, handleBack, handleKelolaPage},
                        transaksi : {countTransaksi, onTransaksiPage, handleTransaksi, handleBackTransaksi},
                        editProduk :    {editedItemPage, editedItem, handleEditedItem, name, price, image, editedStock, aturStock, stockUnlimited, handleAturStock, handleUnlimitedStock,
                                handleChangeStock, handleChangeName, handleChangePrice, handleChangeImage, handleEditedUbah, handleEnterStock  },
                                   
                                    countToko,
                                    
                                    countProduk,
                                //     countTransaksi,
                                  
                                
                                
                                   
                                
                                //     onTransaksiPage,
                                    namaPelanggan,
                                    countCart, 
                                    charts, 
                                    namaProduct, 
                                    harga, 
                                    countQuantity, 
                                    totalPerProduct, 
                                    total, 
                                    showPortal, 
                                    temporaryProductsData,
                                    temporaryProductPrice, 
                                    btnName, 
                                    editedCart, 
                                    editedQuantity, 
                                    disabledBtn,
                                    stock,



                                  



                                    handleAddCountToko,
                                    handleAddCountproduk,
                                    handleAddCountTransaksi,
                                
                                    handleLogout,
                                //     handleKelolaPage, 
                              
                                    handleTransaksi, 
                                    handleBackTransaksi,
                                    handleChangeNamaPelanggan,
                                    chooseNamaPelangganFromList,
                                    filteredNamaPelanggan,
                                    listPelangganFounded,
                                    handleHidePortal,
                                    handleShowPortal,
                                    handleNamaProduct,
                                    addCountQuantity,
                                    decCountQuantity,
                                    handleToCarts,
                                    handleEditProductInCart,
                                    handleAddEditedQuantity,
                                    handleDecEditedQuantity,
                                    handleUbah


            }


}