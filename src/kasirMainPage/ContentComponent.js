import AllTransaksi from "../KasirComponents/AllTransaksi";
import HomePageLogin from "../KasirComponents/HomePageLogin/HomePageLogin";
import PelangganPage from "../KasirComponents/PelangganPage";
import ProdukPage from "../KasirComponents/ProdukPage";
import TransaksiPage from "../KasirComponents/TransaksiPage";


export default function ContentComponent(props){




    if(props.page === "loggedInPage"){

                return(<HomePageLogin {...props} />)
    }





            if(props.page === "productPage"){

                            return(<ProdukPage {...props} />)
                    }




                if(props.page === "pelangganPage"){

                        return (<PelangganPage {...props} />)
                        
            }




                    if(props.page === "lihatTransaksiPage"){

                        return (<AllTransaksi {...props} />)
                        
                        }


                                if(props.page === "transaksi"){

                                        return(<TransaksiPage {...props} />)
                                }






    
}