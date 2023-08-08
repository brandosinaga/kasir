
export const dataToko = [{id_user : "Toko-0-1", nama_user : "Toko Parapat", password : "123", city : "Parapat", email : "parapat_toko@gmail.com",products : [
    {id: 0, name: "Nike VaporFly 4% Flyknit", price: 1000000, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/acmoik7t1kfbprm8hsqs/vaporfly-4-flyknit-running-shoe-7R7zSn.jpg", stock : false}, 
    {id: 1, name: "Nike Air Monarch IV PR", price: 1500000, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/vjsleghax3228bpidanh/air-monarch-iv-pr-shoe-qf64pl.jpg", stock : 5},
    {id: 2, name: "Nike Air Max Deluxe SE", price: 1225000, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/rkhls7wdxdydeg1vkwkt/air-max-deluxe-se-shoe-T6Vkl2.jpg", stock : 10},
    ], 
    transaksi : [], 
    income : 0,
    pelanggan : [
     {id : 0, nama : "Toko Oni Market", kota : "parapat"}, 
     {id : 1, nama : "Anita Sidabutar", kota : "Jakarta"}
     ]}
];
  




    

export const reducer = (state, action) => {

     const {type, data, destination} = action;




          switch(type){

                         case "tambahToko" : {

                                             return [...state, {...data}]
                         }


                        case 'transaksi' : {

                         const addTransaksi = state.reduce((a,e) => {


                                   if(e.id_user === destination && !(e.transaksi.some(item => item.invoice === data.invoice))){
        
                                                  e.transaksi = [...e.transaksi, {...data}]
               
                                                  e.income = e.transaksi.reduce((a,e) => a + e.total ,0) 

                                                  data.cart.forEach(itemInCart => {
                                                       
                                                       e.products.forEach(produk => {

                                                            if(typeof produk.stock === "number" && produk.name.toLowerCase().trim() === itemInCart.namaProduk.toLowerCase().trim()){

                                                                      produk.stock = produk.stock - itemInCart.quantity
                                                                    

                                                                   
                                                            }
                                                       })

                                                  });
                                                 

                                        }
                                       
                                        
                                   
                                   return [...a, e]

                         },[])                         

                             
                                  return [...addTransaksi]

                         

                             } 





                           case "tambahProduk" : {


                              const addTransaksi = state.reduce((a,e) => {

                                        if(e.id_user === action.destination && !(e.products.some(item => item.name === data.name))){
                                             
                                            e.products = [...e.products, {id : e.products.length, ...data}]
                                        }

                                        return [...a, e]

                              },[]);

                              return [...addTransaksi]
                           }





                           case "editProduk" : {

                              const editedItem = state.reduce((a,e) => {


                                        if(e.id_user === destination){

                                             const productsAfterEdited = e.products.map((item) => item.id === data.id ? {id : item.id, ...data} : item)

                                             e.products = [...productsAfterEdited]

                                             

                                        }

                                        return [...a, e]

                              },[]);

                              return [...editedItem]
                           }






                           case "deleteProduct" : {

                              const AllItems = state.reduce((a,e) => {


                                   if(e.id_user === destination){

                                        const productsAfterDeleted = e.products.filter((item) => item.id !== data.id )

                                        e.products = [...productsAfterDeleted]

                                        

                                   }

                                   return [...a, e]

                         },[]);

                         return [...AllItems]
                              
                              
                           }



                           


                           case "editedpelanggan" : {

                              const alldataAfterEdited = state.reduce((a,e) => {

                                        if(e.id_user === destination){

                                            const editedPelanggan = e.pelanggan.map(item => item.id === data.id ? {...data} : item)
                                            
                                            e.pelanggan = [...editedPelanggan]
                                        }

                                        return [...a, e]

                              },[])

                              return [...alldataAfterEdited]
                           }
                         




                           
                           case "hapusPelanggan" : {

                              const alldataAfterEdited = state.reduce((a,e) => {


                                   if(e.id_user === destination){

                                        const filteredPelanggan = e.pelanggan.filter((item) => item.id !== data.id )

                                        e.pelanggan = [...filteredPelanggan]

                                        

                                   }

                                   return [...a, e]

                         },[]);

                         return [...alldataAfterEdited]
                              
                              
                           }



                           case "tambahPelanggan" : {

                              const allDataAfterTambahPelanggan = state.reduce((a,e) => {

                                        if(e.id_user === destination && !(e.pelanggan.some(item => item.nama === data.nama))){

                                                  e.pelanggan = [...e.pelanggan, {id : e.pelanggan.length+1, ...data}]

                                        }


                                        return [...a, e]


                              },[])

                              console.log(allDataAfterTambahPelanggan)

                              return [...allDataAfterTambahPelanggan]
                           }

                                   

                              default  : return state;    
                        
                          }
}

