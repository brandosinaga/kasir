import KelolaProdukPage from "./KelolaProdukPage";
import KelolaPelangganPage from "./KelolaPelangganPage";
import LihattransaksiPage from "./LihatTransaksiPage";
import TransaksiPage from "./TransaksiPage";



 function KelolaPages (props)  {

    
    

    if(props.contentContainer.kelolaPage === "produkPage"){

        return (<KelolaProdukPage {...props}/>)
        
        }                 

    

                    if(props.contentContainer.kelolaPage === "pelangganPage"){

                        return(<KelolaPelangganPage {...props} />)
                        
                        }



                                    if(props.contentContainer.kelolaPage === "lihattransaksiPage"){

                                        return (<LihattransaksiPage {...props} />)
                                        
                                        }
                                        



                
                                                    if(props.contentContainer.kelolaPage === "transaksiPage"){

                                                        return (<TransaksiPage {...props} />)

                                                            }
                                            
                       

                    
                        

    


}


export default KelolaPages