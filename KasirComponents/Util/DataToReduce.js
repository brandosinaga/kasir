
export const dataToko = [{id_user : "Toko-0-1", nama_user : "Toko Parapat", password : "123", city : "Parapat", email : "parapat_toko@gmail.com",products : [
    {id: 0, name: "Nike VaporFly 4% Flyknit", price: 209, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/acmoik7t1kfbprm8hsqs/vaporfly-4-flyknit-running-shoe-7R7zSn.jpg", stock : false}, 
    {id: 1, name: "Nike Air Monarch IV PR", price: 89, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/vjsleghax3228bpidanh/air-monarch-iv-pr-shoe-qf64pl.jpg", stock : false},
    {id: 2, name: "Nike Air Max Deluxe SE", price: 149, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/rkhls7wdxdydeg1vkwkt/air-max-deluxe-se-shoe-T6Vkl2.jpg", stock : 10},
    ], countTransaksi : 0, transaksi : [10,20,30], pelanggan : [{id : "C-1" ,nama : "Toko Oni Market", kota : "parapat"}, {id : "C-2",nama : "Anita Sidabutar", kota : "Jakarta"}]}];
  



    






export const reducer = (state, action) => {

     const {type, data} = action;


          switch(type){



                        case 'add_newToko' : {
                                   
                                   return [...state, data] 
                             
                             }    

                                  




                        case 'transaksi' : {

                                  
                                  const {id_user, countTransaksi, transaksi} = data;

                                  return state.reduce((a, e, i) => {

                                                      if(e.id_user === id_user){

                                                           e.countTransaksi = countTransaksi;
                                                           e.transaksi = transaksi

                                                           return [...a, e]
                                                      }

                                                      return [...a, e]

                                                      

                                  },[])

                                  


                             }

                             case "edit-produk" :{


                                       const result = state.reduce((a,e) => {


                                                       if(e.id_user === action.destination.id_user){


                                                           const selectedItemsProducts = e.products.map(item => {

                                                                 if(item.name === action.destination.nama_produk){

                                                                      return {id : item.id, ...action.data}
                                                                 }

                                                                 return item
                                                            })

                                                            e.products = [...selectedItemsProducts]

                                                            a.push(e)
                                                       } else {

                                                            a.push(e)
                                                       }


                                                       return a

                                                       

                                       }, [])
                                   


                                                  return [...result]
                             }




                    
                                 




                              default : return state     
                        
                          }
}

