import { useState } from "react";

export default function useLoginSuccessUI(transaksi){


       // states
    
    const [page, setPage]= useState('loggedInPage');

    const [pageBayar, setPageBayar] = useState(false);




    
        // funtions

    const handleChangePage = (pageName) => setPage(pageName); 
    

    const handlebackToMainMenu = () => setPage('loggedInPage');

    const handlePageBayar = () => setPageBayar(!pageBayar)

    const handleBayar = () => {
        
                        setPageBayar(!pageBayar);

                        transaksi.handleBayar();

                        setPage('loggedInPage')
                        
            
    
    }
    
    
    const handleTransaksi = () => setPage('transaksi')



    return {
                    page,
                    pageBayar,
                    handleChangePage,
                    handlebackToMainMenu,
                    handlePageBayar,
                    handleBayar,
                    handleTransaksi
    }

}
