import { useReducer, useState } from "react";
import {dataToko, reducer} from '../Utility/DataToReduce' 


export default function useData(){



        
        // states dataReduce
        
        const [allDataToko, dispatch] = useReducer(reducer, dataToko);





        // states loginAuthentification

        const [isLogin, setIsLogin]  = useState(false);

        const [dataEnter, setDataEnter] = useState({});






        // states Transaksi

        const [cart, setCart] = useState([])

        const [countTransaksi, setCountTransaksi] = useState(1)

        const [namaPelanggan, setNamaPelanggan] = useState('');

        const [namaProduk, setNamaProduk] = useState('');

        const [price, setPrice] = useState(0);
        
        const [quantity, setQuantity] = useState(1);

        const [total, setTotal] = useState(0);

        const [selectedProductStock, setSelectedProductStock] = useState(0);
       


    


        


        



        // functions

        const handleDataEnter = (e) => {

                e.preventDefault()

                const formData = new FormData(e.target);

                const dataInput = {...Object.fromEntries(formData)};

                const checkDataLoginFromAllDataToko = allDataToko.find(item => (item.id_user === dataInput.id_user) && (item.password === dataInput.password))
                               
                setDataEnter(checkDataLoginFromAllDataToko);

                if(checkDataLoginFromAllDataToko === undefined){

                        setIsLogin(false)
                        
                } else {

                        setIsLogin(true);

                        setDataEnter(checkDataLoginFromAllDataToko);
                }
                
                

        }





        const handleLogout = () => setIsLogin(false);



        const handleCountTransaksi = () => setCountTransaksi(countTransaksi + 1);




        const handleChangeNamaPelanggan = (e) => setNamaPelanggan(e.target.value);



        const handleMakeThisNamaPelanggan = (namaPelanggan) => setNamaPelanggan(namaPelanggan + " ")



        const handleNamaProduk = (e) => setNamaProduk(e.target.value)



        const handleMakeThisNamaProduk = (namaProduk) => {

                                setNamaProduk(namaProduk + " ");
                                const item = dataEnter.products.find(item => item.name === namaProduk)
                                setSelectedProductStock(item.stock);
                                setPrice(item.price)
                              

        }



        const handleAddQuantity = () => setQuantity(quantity + 1);
               

                
     

        const handleDecQuantity = () => setQuantity(quantity - 1);




        const handleBackFromSelectingProduct = () => {

                                        setNamaProduk('') 
                                        setPrice(0) 
                                        setQuantity(1) 
                                       

        }



        
        const handleAddToCart = () => {

                setCart([...cart, {number : (cart.length + 1),namaProduk, price, quantity, totalPerItem : (price*quantity)}])
                
                setTotal(prevTotal => prevTotal + (price * quantity))
            
            
        }


        

        const handleAddToCartFromKelolaProducts = (item) => {

                setCart([...cart, {number : (cart.length + 1),namaProduk : item.name, price : item.price, quantity, totalPerItem : (item.price*quantity)}])
                
                setTotal(prevTotal => prevTotal + (item.price * quantity))

               
        }




        const handleHapusFromCart = (produkName) => {


              const result = cart.reduce((a,e) => {


                        if(e.namaProduk.toLowerCase() === produkName.toLowerCase()){

                                return [...a]


                        } else {
                                
                                e.number = a.length + 1;

                                a.push(e)

                                 return [...a]

                        }              

              },[])

              
              setCart([...result]);

              setTotal(result.reduce((a,e) => a + e.totalPerItem , 0));

        }



        const handleBayar = () => {

                        const dataTransaksi = {
                                                        invoice : `TR-0-${countTransaksi}`,
                                                        tanggalTransaksi : new Date().toDateString(),
                                                        namaPelanggan,
                                                        total,
                                                        jumlah_item : cart.reduce((a,e) => a + e.quantity , 0),
                                                        cart

                        }


                        setNamaPelanggan('');

                        setCart([]);

                        setTotal(0);

                        setCountTransaksi(countTransaksi + 1);

                       

                        dispatch({type : "transaksi", data : dataTransaksi, destination : dataEnter.id_user})

                        

                        

                }



        const handleAddQuantityFromCart = (item) => {

               

                const changeCart = cart.reduce((a,e) => {

                                if(e.namaProduk === item.namaProduk){

                                        e.quantity = e.quantity + 1;
                                        e.totalPerItem = e.totalPerItem + e.price;
                                }

                                return [...a, e]

                },[])

                setCart([...changeCart])
                setTotal(changeCart.reduce((a,e) => a + e.totalPerItem ,0))

        }


        const handleDecQuantityFromCart = (item) => {

           

                const changeCart = cart.reduce((a,e) => {

                                if(e.namaProduk === item.namaProduk){

                                        e.quantity = e.quantity - 1;
                                        e.totalPerItem = e.totalPerItem - e.price;
                                }

                                return [...a, e]

                },[])

                setCart([...changeCart]);

                setTotal(changeCart.reduce((a,e) => a +  e.totalPerItem ,0));

        }
        








        return {


                        dataReduce : {
                                        allDataToko, 
                                        dispatch
                                },

                        loginAuthentification : {
                                        isLogin, 
                                        dataEnter, 
                                        handleDataEnter, 
                                        handleLogout
                                },

                        transaksi : {
                                        cart, 
                                        countTransaksi, 
                                        namaPelanggan, 
                                        namaProduk,
                                        selectedProductStock, 
                                        price, 
                                        quantity, 
                                        total,
                                        handleCountTransaksi, 
                                        handleChangeNamaPelanggan, 
                                        handleMakeThisNamaPelanggan, 
                                        handleNamaProduk, 
                                        handleMakeThisNamaProduk, 
                                        handleAddQuantity, 
                                        handleDecQuantity, 
                                        handleBackFromSelectingProduct, 
                                        handleAddToCart,
                                        handleHapusFromCart,
                                        handleBayar
                                },

                        kelolaProduk : {

                                        handleAddToCartFromKelolaProducts

                                        },
                        editQuantityInCart : {

                                        handleAddQuantityFromCart, 
                                        handleDecQuantityFromCart

                                        }
                


        }

}